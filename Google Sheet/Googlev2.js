const API_KEY = 'AIzaSyDpv1eTWME9FQD2fqOIBHCEUYW_pezOWBA';
const SHEET_ID = '1f69lWzxm2BUsBZNSSvxsenOIJymSlBboN-BofV5vB9U';
const rangeData = 'All nodes';

const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${rangeData}?key=${API_KEY}`;

const nodes1 = [];

function fetchNodes() {
    return $.getJSON(url).then(data => {
        if (!data.values) {
            console.error('No values found in the data');
            return;
        }

        const values = data.values;
        const rowsToProcess = values.slice(1);

        const levels = values[0];

        rowsToProcess.forEach((row) => {
            row.forEach((cell, colIndex) => {
                // Skip columns 2 and 5
                if (colIndex === 2 || colIndex === 5) {
                    return;
                }
                if (cell) {
                    const level = levels[colIndex];
                    nodes1.push({ lvl: level, name: cell });

                }
            });
        });
    });
}




const rangeData1 = 'lvl0 to lvl1';
const rangeData2 = 'lvl1 to lvl2';
const rangeData3 = 'lvl2 to lvl3';

const url1 = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${rangeData1}?key=${API_KEY}`;
const url2 = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${rangeData2}?key=${API_KEY}`;
const url3 = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${rangeData3}?key=${API_KEY}`;

const links1 = [];

function fetchLinks(url) {
    return $.getJSON(url).then(data => {
        if (!data.values) {
            console.error('No values found in the data');
            return;
        }

        const values = data.values;
        const rowsToProcess = values.slice(1);

        rowsToProcess.forEach(row => {
            const target = row[0];
            const source = row[1];

            if (target && source) {
                links1.push({ target, source });
            }
        });
    });  
}




let data = {
    nodes: [],
    links: []
};

    

    // console.log(data);

// Execute all fetch functions and wait for them to complete
Promise.all([fetchNodes(), fetchLinks(url1), fetchLinks(url2), fetchLinks(url3)])
    .then(() => {
        data.nodes = nodes1;
        data.links = links1;

        // console.log("Data inside Promise.all:", data);
        create_relationship_diagram(data)
    })
    .catch(error => {
        console.error('Check to make sure that changes are made to both All Nodes and the levels on the spreadsheet', error);
    });



    // console.log("Data outside Promise.all:", data);


    var width = 1600,
    height = 1600,
    box_width = 200,
    box_height = 30,
    box_heights = [40, 20, 40, 20],
    box_gap = {
        width: 150,
        height: 2
    },
    margin = {
        top: 100,
        right: 16,
        bottom: 16,
        left: 16
    },
    svg;

    var nodes = [];
    var links = [];
    var lvlCount = 0;

    
    
    //creates the horizontal link between two different objects
    var link = d3.linkHorizontal()
        .x(function (d) {
            return d.y;
        })
        .y(function (d) {
            return d.x;
        });
    
    //uses a for loop to find the specific node that is needed
    function locate_node(text) {
        "use strict";
        var i;
        for (i = 0; i < nodes.length; i += 1) {
            if (nodes[i].name === text) {
                return nodes[i];
            }
        }
        return null;
    }
    
    //mouse action to allow the data to be dynamically changed
    function mouse_action(val, stat, direction) {
        "use strict";
        d3.select("#" + val.id).classed("active", stat);
    
        links.forEach(function (d) {
            if (direction == "root") {
                if (d.source.id === val.id) {
                    d3.select("#" + d.id).classed("activelink", stat);
                    d3.select("#" + d.id).classed("link", !stat);
                    if (d.target.lvl < val.lvl)
                        mouse_action(d.target, stat, "left");
                    else if (d.target.lvl > val.lvl)
                        mouse_action(d.target, stat, "right");
                }
                if (d.target.id === val.id) {
                    d3.select("#" + d.id).classed("activelink", stat);
                    d3.select("#" + d.id).classed("link", !stat);
                    if (direction == "root") {
                        if (d.source.lvl < val.lvl)
                            mouse_action(d.source, stat, "left");
                        else if (d.source.lvl > val.lvl)
                            mouse_action(d.source, stat, "right");
                    }
                }
            } else if (direction == "left") {
                if (d.source.id === val.id && d.target.lvl < val.lvl) {
                    d3.select("#" + d.id).classed("activelink", stat);
                    d3.select("#" + d.id).classed("link", !stat);
    
                    mouse_action(d.target, stat, direction);
                }
                if (d.target.id === val.id && d.source.lvl < val.lvl) {
                    d3.select("#" + d.id).classed("activelink", stat);
                    d3.select("#" + d.id).classed("link", !stat);
                    mouse_action(d.source, stat, direction);
                }
            } else if (direction == "right") {
                if (d.source.id === val.id && d.target.lvl > val.lvl) {
                    d3.select("#" + d.id).classed("activelink", stat);
                    d3.select("#" + d.id).classed("link", !stat);
                    mouse_action(d.target, stat, direction);
                }
                if (d.target.id === val.id && d.source.lvl > val.lvl) {
                    d3.select("#" + d.id).classed("activelink", stat);
                    d3.select("#" + d.id).classed("link", !stat);
                    mouse_action(d.source, stat, direction);
                }
            }
        });
    }
    
    //when mouse clicks on it it stays as how it is
    function mouse_action_click(val, stat, direction) {
        "use strict";
        d3.select("#" + val.id).classed("active_clk", stat);
    
        links.forEach(function (d) {
            if (direction == "root") {
                if (d.source.id === val.id) {
                    d3.select("#" + d.id).classed("activelink_clk", stat);
                    d3.select("#" + d.id).classed("link_clk", !stat);
                    if (d.target.lvl < val.lvl)
                        mouse_action_click(d.target, stat, "left");
                    else if (d.target.lvl > val.lvl)
                        mouse_action_click(d.target, stat, "right");
                }
                if (d.target.id === val.id) {
                    d3.select("#" + d.id).classed("activelink_clk", stat);
                    d3.select("#" + d.id).classed("link_clk", !stat);
                    if (direction == "root") {
                        if (d.source.lvl < val.lvl)
                            mouse_action_click(d.source, stat, "left");
                        else if (d.source.lvl > val.lvl)
                            mouse_action_click(d.source, stat, "right");
                    }
                }
            } else if (direction == "left") {
                if (d.source.id === val.id && d.target.lvl < val.lvl) {
                    d3.select("#" + d.id).classed("activelink_clk", stat);
                    d3.select("#" + d.id).classed("link_clk", !stat);
    
                    mouse_action_click(d.target, stat, direction);
                }
                if (d.target.id === val.id && d.source.lvl < val.lvl) {
                    d3.select("#" + d.id).classed("activelink_clk", stat);
                    d3.select("#" + d.id).classed("link_clk", !stat);
                    mouse_action_click(d.source, stat, direction);
                }
            } else if (direction == "right") {
                if (d.source.id === val.id && d.target.lvl > val.lvl) {
                    d3.select("#" + d.id).classed("activelink_clk", stat);
                    d3.select("#" + d.id).classed("link_clk", !stat);
                    mouse_action_click(d.target, stat, direction);
                }
                if (d.target.id === val.id && d.source.lvl > val.lvl) {
                    d3.select("#" + d.id).classed("activelink_clk", stat);
                    d3.select("#" + d.id).classed("link_clk", !stat);
                    mouse_action_click(d.source, stat, direction);
                }
            }
        });
    }
    
    function untravel_links() {
        "use strict";
        links.forEach(function (d) {
            d.visited = false;
        });
    }
    
    function clearActiveLinksNodes() {
        d3.selectAll(".active_clk").classed("active_clk", false);
        d3.selectAll(".activelink_clk").classed("activelink_clk", false);
    
    }

    
    function create_relationship_diagram(data) {
        "use strict";
        var count = [];
        var col_lengths = [];
    
        data.nodes.forEach(function (d) {
            count[d.lvl] = 0;
            //krishivtesting
            // window.alert([d.source.id]);
            col_lengths[d.lvl] = 0;
        });
        lvlCount = count.length;
    
        //offsetShortColumns
        data.nodes.forEach(function (d, i) {
        col_lengths[d.lvl] += 1;
    });
    
    let max_col_length = Math.max(...col_lengths);
    let max_col_lvl = col_lengths.indexOf(max_col_length);
    
    let tallest_col_height = max_col_length * (box_heights[max_col_lvl] + box_gap.height);
    
    // Calculate additional spacing based on the tallest column height and the number of nodes in levels 0 and 2
    let additional_spacing_0 = (tallest_col_height - col_lengths[0] * (box_heights[0] + box_gap.height)) / (col_lengths[0] + 1);
    let additional_spacing_2 = (tallest_col_height - col_lengths[2] * (box_heights[2] + box_gap.height)) / (col_lengths[2] + 1);
    
    data.nodes.forEach(function (d, i) {
        d.x = margin.left + d.lvl * (box_width + box_gap.width);
        d.y = (margin.top + (box_heights[d.lvl] + box_gap.height) * count[d.lvl]);
    
        if (d.lvl == 0) {
            d.y = (margin.top + (box_heights[d.lvl] + box_gap.height + additional_spacing_0) * count[d.lvl]);
            d.y += ((tallest_col_height - (col_lengths[d.lvl]) * (box_heights[d.lvl] + box_gap.height + additional_spacing_0)) / 2);
            d.y += (box_heights[d.lvl] + box_gap.height + additional_spacing_0) * 0.33; // Dynamic adjustment
        }
        
        if (d.lvl == 2) {
            d.y = (margin.top + (box_heights[d.lvl] + box_gap.height + additional_spacing_2) * count[d.lvl]);
            d.y += ((tallest_col_height - (col_lengths[d.lvl]) * (box_heights[d.lvl] + box_gap.height + additional_spacing_2)) / 2);
            d.y += (box_heights[d.lvl] + box_gap.height + additional_spacing_2) * 0.27; // Dynamic adjustment
        }
    
        if (d.lvl == 1) {
            d.y += ((tallest_col_height - (col_lengths[d.lvl]) * (box_heights[d.lvl] + box_gap.height)) / 2);
        }
    
        d.id = "n" + i;
        count[d.lvl] += 1;
        nodes.push(d);
    });
    
        data.links.forEach(function (d) {
            links.push({
                source: locate_node(d.source),
                target: locate_node(d.target),
                id: "l" + locate_node(d.source).id + locate_node(d.target).id
            });
        });
        untravel_links();
    
        d3.select("#chart_canvas")
            .on("click", clearActiveLinksNodes)
    
        svg.append("g")
            .attr("class", "nodes");
    
        var node = svg.select(".nodes")
            .selectAll("g")
            .data(nodes)
            .enter()
            .append("g")
            .attr("class", "unit");
    
        node.append("rect")
            .attr("x", function (d) { return d.x; })
            .attr("y", function (d) { return d.y; })
            .attr("id", function (d) { return d.id; })
            .attr("width", box_width)
            .attr("height", function (d) { return box_heights[d.lvl]; })
            .attr("class", "node")
            .attr("class", function (d) { return "col" + d.lvl; })
            .attr("rx", 0.03*box_width)
            .attr("ry", 0.2*box_height)
            .on("mouseover", function () {
                mouse_action(d3.select(this).datum(), true, "root");
                untravel_links();
            })
            .on("mouseout", function () {
                mouse_action(d3.select(this).datum(), false, "root");
                untravel_links();
            })
            .on("click", function (e) {
                e.stopPropagation();
                if (d3.select(this).classed("active_clk")) {
                    mouse_action_click(d3.select(this).datum(), false, "root");
                }
                else {
                    mouse_action_click(d3.select(this).datum(), true, "root");
                }
                untravel_links();
            });

            var businessValueNodesCount = nodes.filter(function(d) {
                return d.lvl == 0; // Adjust 0 to the appropriate level number for "Business Value"
            }).length;
        
            var useCasesCount = nodes.filter(function(d) {
                return d.lvl == 1; // Adjust 0 to the appropriate level number for "Business Value"
            }).length;
        
            var capabilitiesCount = nodes.filter(function(d) {
                return d.lvl == 2; // Adjust 0 to the appropriate level number for "Business Value"
            }).length;
            
//break          

    const UseCasesUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${rangeData}?key=${API_KEY}`;
    
    fetch(UseCasesUrl)
    .then(response => response.json())
    .then(data => {
        // Skip the first row (header) and extract data only from the second column
        const UseCasesData = data.values.slice(1).map(row => row[2]);

        // Proceed with your D3.js code
        initializeUseCases(UseCasesData);
    })
    .catch(error => console.error('Error fetching data:', error));

    let currentPopup = null;
    
    function initializeUseCases(UseCasesData) {
        let boxIndex = 0;
    
        node.each(function(d) {
            if (d.lvl == 1) {
                boxIndex++;
        
                var smallerBox = d3.select(this)
                    .append("rect")
                    .attr("x", d.x + 0.95 * box_width)
                    .attr("y", d.y)
                    .attr("id", d.id + "-smaller-box")
                    .attr("width", 0.05 * box_width)
                    .attr("height", 0.66 * box_height)
                    .attr("class", "smaller-box")
                    .attr("rx", 2 * box_width)
                    .attr("ry", 0.66 * box_height);
        
                d3.select(this)
                    .append("text")
                    .attr("x", d.x + 0.972 * box_width)
                    .attr("y", d.y + 0.25 * box_height)
                    .attr("text-anchor", "middle")
                    .attr("alignment-baseline", "middle")
                    .text("...")
                    .style("cursor", "pointer")
                    .on("click", (function(index) {
                        return function() {
                            const text = UseCasesData[index - 1];
    
                            if (text) {
                                // Close the currently open popup, if any
                                if (currentPopup) {
                                    document.body.removeChild(currentPopup);
                                    currentPopup = null;
                                }
                                
                                // Create and show the new popup
                                const popup = document.createElement("div");
                                popup.className = "popup";
    
                                const content = document.createElement("div");
                                content.className = "popup-content";
                                content.innerHTML = text;
    
                                popup.appendChild(content);
    
                                const closeButton = document.createElement("button");
                                closeButton.className = "popup-close";
                                closeButton.innerText = "close";
                                closeButton.onclick = function() {
                                    document.body.removeChild(popup);
                                    currentPopup = null;
                                };
    
                                popup.appendChild(closeButton);
                                document.body.appendChild(popup);
    
                                const { x, y } = this.getBoundingClientRect();
                                popup.style.position = 'absolute';
                                popup.style.left = `${x + window.scrollX}px`;
                                popup.style.top = `${y + window.scrollY}px`;
    
                                currentPopup = popup;
                            }
                        };
                    })(boxIndex));
            }
        });
    }
    
    
    
   


    const FeaturesUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${rangeData}?key=${API_KEY}`;
    
    fetch(FeaturesUrl)
        .then(response => response.json())
        .then(data => {
            // Skip the first row (header) and extract data only from the second column
            const FeaturesCapabilitiesData = data.values.slice(1).map(row => row[5]);
    
            // Proceed with your D3.js code
            initializeFeatures(FeaturesCapabilitiesData);
        })
        .catch(error => console.error('Error fetching data:', error));



        function initializeFeatures(FeaturesCapabilitiesData) {
            let boxIndex = 0;
            
            node.each(function(d) {
                if (d.lvl == 3) { // Assuming lvl 3 is the correct level for Features
                    boxIndex++;
            
                    var smallerBox = d3.select(this)
                        .append("rect")
                        .attr("x", d.x + 0.95 * box_width)
                        .attr("y", d.y)
                        .attr("id", d.id + "-smaller-box")
                        .attr("width", 0.05 * box_width)
                        .attr("height", 0.66 * box_height)
                        .attr("class", "smaller-box")
                        .attr("rx", 2 * box_width)
                        .attr("ry", 0.66 * box_height);
            
                    d3.select(this)
                        .append("text")
                        .attr("x", d.x + 0.972 * box_width)
                        .attr("y", d.y + 0.25 * box_height)
                        .attr("text-anchor", "middle")
                        .attr("alignment-baseline", "middle")
                        .text("...")
                        .style("cursor", "pointer")
                        .on("click", (function(index) {
                            return function() {
                                const text = FeaturesCapabilitiesData[index - 1];
                                
                                if (text) {
                                    // Close the currently open popup, if any
                                    if (currentPopup) {
                                        document.body.removeChild(currentPopup);
                                        currentPopup = null;
                                    }
                                    
                                    // Create and show the new popup
                                    const popup = document.createElement("div");
                                    popup.className = "popup";
        
                                    const content = document.createElement("div");
                                    content.className = "popup-content";
                                    content.innerHTML = text;
        
                                    popup.appendChild(content);
        
                                    const closeButton = document.createElement("button");
                                    closeButton.className = "popup-close";
                                    closeButton.innerText = "close";
                                    closeButton.onclick = function() {
                                        document.body.removeChild(popup);
                                        currentPopup = null;
                                    };
        
                                    popup.appendChild(closeButton);
                                    document.body.appendChild(popup);
        
                                    const { x, y } = this.getBoundingClientRect();
                                    popup.style.position = 'absolute';
                                    popup.style.left = `${x + window.scrollX}px`;
                                    popup.style.top = `${y + window.scrollY}px`;
        
                                    currentPopup = popup;
                                }
                            };
                        })(boxIndex));
                }
            });
        }
        
    

    

    
    
        node.append("text")
            .attr("class", function (d) { return "label" + d.lvl; })
            .attr("x", function (d) { return d.x + (0.055)*box_width; })
            .attr("y", function (d) { return d.y + (0.5)*box_height; })
            .text(function (d) { return d.name; });
    
    
    
        //overall title and column titles
        svg.append("text")
            .attr("id", "chart_title")
            .attr("x", 0.00625*width)
            .attr("y", 0.015625*height)
            .text("Customer(Org) Data - Value Map");
            
            
            
    
    
        var column_data = [
            {
                "lvl": 0,
                "title": "Business Value"
            },
            {
                "lvl": 1,
                "title": "Use Cases"
            },
            {
                "lvl": 2,
                "title": "Capabilities"
            },
            {
                "lvl": 3,
                "title": "Features"
            },
    
    
        ]
        var col_titles = svg.append("g")
            .attr("class", "column_title")
            .selectAll("g")
            .data(column_data)
            .enter()
            .append("g")
    
        col_titles.append("rect")
            .attr("x", function (d) { return margin.left + d.lvl * (box_width + box_gap.width); })
            .attr("y", function (d) { return 0.0375*height; })
            .attr("id", function (d) { return "col_title" + d.lvl; })
            .attr("width", box_width)
            .attr("height", function (d) { return box_height; })
            .attr("class", function (d) { return "col_title"; })
            /* .attr("rx", 2*box_height)
            .attr("ry", 0.03*box_width) */
    
        col_titles.append("text")
            .attr("x", function (d) { return 0.83333333333*box_height + margin.left + d.lvl * (box_width + box_gap.width); })
            .attr("y", function (d) { return 0.0375*height + 0.66*box_height; })
            .attr("class", "col_title_text")
            .text(function (d) { return d.title; });
    
    
    
        //d.x = margin.left + d.lvl * (box_width + box_gap.width);
        // d.y = (margin.top + (box_heights[d.lvl] + box_gap.height) * count[d.lvl]);
    
    
    
        links.forEach(function (li) {
            svg.append("path", "g")
                .attr("class", "link")
                .attr("id", li.id)
                .attr("d", function () {
                    var target_link_point = {
                        //x: li.target.y + 0.5 * box_height,
                        x: li.target.y + 0.5 * box_heights[li.target.lvl],
                        y: li.target.x
                    };
                    var source_link_point = {
                        x: li.source.y + 0.5 * box_heights[li.source.lvl],
                        y: li.source.x
                    };
    
                    if (source_link_point.y < target_link_point.y) {
                        source_link_point.y += box_width;
                    } else {
                        target_link_point.y += box_width;
                    }
                    return link({
                        source: source_link_point,
                        target: target_link_point
                    });
                });
        });
    }
    
    svg = d3.select("#rel_diagram").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("id", "chart_canvas")
        .append("g");
    
    svg.append("image")
       .attr("xlink:href", "blumetra-logo.svg")
       .attr("x", 0.774*width)
       .attr("y", 0.0000000000000000000000000001*height)
       .attr("width", 200) 
       .attr("height", 36);

    

    