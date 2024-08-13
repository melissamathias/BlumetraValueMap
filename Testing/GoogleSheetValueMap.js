const API_KEY = 'AIzaSyDpv1eTWME9FQD2fqOIBHCEUYW_pezOWBA'
const SHEET_ID = '1f69lWzxm2BUsBZNSSvxsenOIJymSlBboN-BofV5vB9U';
const rangeData = 'All nodes'

const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${rangeData}?key=${API_KEY}`;


    var nodes = [];
    console.log(nodes.length)

    $.getJSON(url, function(data){
        if (!data.values) {
            console.error('No values found in the data');
            return;
        }

        const values = data.values;

        

        const rowsToProcess = values.slice(1);

        rowsToProcess.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                if (cell) {
                    nodes.push({ lvl: colIndex.toString(), name: cell });
                }
            });
        });

        console.log(nodes.length);
    });
    
    console.log(nodes.length);

    rangeData1 = 'lvl0 to lvl1'
    rangeData2 = 'lvl1 to lvl2'
    rangeData3 = 'lvl2 to lvl3'

    const url1 = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${rangeData1}?key=${API_KEY}`;
    const url2 = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${rangeData2}?key=${API_KEY}`;
    const url3 = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${rangeData3}?key=${API_KEY}`;
    var links = [];


// level 0 to level 1
    $.getJSON(url1, function(data) {
        if (!data.values) {
            console.error('No values found in the data');
            return;
        }

        const values = data.values;

        const rowsToProcess = values.slice(1);
        
        const targets = [];
        const sources = [];

        rowsToProcess.forEach((row) => {
            const target = row[0]; // First column
            const source = row[1];
        

        

        if(target && source){
            targets.push(target);
            sources.push(source);
        }

    });
        // Log the links array to the console
        

        targets.forEach((target, index) => {
            const source = sources[index];
            if (source) {
                links.push({ target, source });
            }
        });

        // console.log(links);
    });



//level 1 to level 2
    $.getJSON(url2, function(data) {
        if (!data.values) {
            console.error('No values found in the data');
            return;
        }

        const values = data.values;

        const rowsToProcess = values.slice(1);
        
        const targets = [];
        const sources = [];

        rowsToProcess.forEach((row) => {
            const target = row[0]; // First column
            const source = row[1];
        

        

        if(target && source){
            targets.push(target);
            sources.push(source);
        }

    });
        // Log the links array to the console
        

        targets.forEach((target, index) => {
            const source = sources[index];
            if (source) {
                links.push({ target, source });
            }
        });

        // console.log(links);
    });



//level 2 to level 3
    $.getJSON(url3, function(data) {
        if (!data.values) {
            console.error('No values found in the data');
            return;
        }

        const values = data.values;

        const rowsToProcess = values.slice(1);
        
        const targets = [];
        const sources = [];

        rowsToProcess.forEach((row) => {
            const target = row[0]; // First column
            const source = row[1];
        

        

        if(target && source){
            targets.push(target);
            sources.push(source);
        }

    });
        // Log the links array to the console
        

        targets.forEach((target, index) => {
            const source = sources[index];
            if (source) {
                links.push({ target, source });
            }
        });

        // console.log(links);
    });


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

    var data = {
        "nodes": [
            {
                "lvl": "0",
                "name": "Top Line (Growth)"
            },
            {
                "lvl": "1",
                "name": "Prospect Marketing"
            },
            {
                "lvl": "2",
                "name": "Unique Customer Profile"
            },
            {
                "lvl": "3",
                "name": "Identity Attribute Mgt."
            },
            {
                "lvl": "0",
                "name": "Bottomline (Optimization)"
            },
            {
                "lvl": "1",
                "name": "Competitive Analysis"
            },
            {
                "lvl": "2",
                "name": "Accurate Information"
            },
            {
                "lvl": "3",
                "name": "Core Attribute Mgt."
            },
            {
                "lvl": "0",
                "name": "Customer Experience"
            },
            {
                "lvl": "1",
                "name": "Customer Marketing"
            },
            {
                "lvl": "2",
                "name": "Customer Relationships"
            },
            {
                "lvl": "3",
                "name": "Search before Create"
            },
            {
                "lvl": "0",
                "name": "Compliance & Risk"
            },
            {
                "lvl": "1",
                "name": "White Space Analysis"
            },
            {
                "lvl": "2",
                "name": "3rd Party Enrichment"
            },
            {
                "lvl": "3",
                "name": "Match & Merge"
            },
            {
                "lvl": "1",
                "name": "Marketing Effectiveness"
            },
            {
                "lvl": "2",
                "name": "Data Governance"
            },
            {
                "lvl": "3",
                "name": "Trust & Survivorship"
            },
            {
                "lvl": "1",
                "name": "Search Before Create"
            },
            {
                "lvl": "2",
                "name": "Technology Framework"
            },
            {
                "lvl": "3",
                "name": "External Match"
            },
            {
                "lvl": "1",
                "name": "Omni-Channel Integration"
            },
            {
                "lvl": "3",
                "name": "MDMID Cross Reference"
            },
            {
                "lvl": "1",
                "name": "Customer Segmentation"
            },
            {
                "lvl": "3",
                "name": "Synonym Replacement"
            },
            {
                "lvl": "1",
                "name": "Web Registration"
            },
            {
                "lvl": "3",
                "name": "Validation Rules"
            },
            {
                "lvl": "1",
                "name": "Pricing Optimization"
            },
            {
                "lvl": "3",
                "name": "Business Verification"
            },
            {
                "lvl": "1",
                "name": "Forecasting/Quota Alignment"
            },
            {
                "lvl": "3",
                "name": "Address Validation"
            },
            {
                "lvl": "1",
                "name": "Lead Account Match"
            },
            {
                "lvl": "3",
                "name": "Hierarchy Modeling"
            },
            {
                "lvl": "1",
                "name": "Net New Logo"
            },
            {
                "lvl": "3",
                "name": "Related Entities"
            },
            {
                "lvl": "1",
                "name": "Sales Territory Management"
            },
            {
                "lvl": "3",
                "name": "Product Master Relationship"
            },
            {
                "lvl": "1",
                "name": "Account Management"
            },
            {
                "lvl": "3",
                "name": "Contact Master Relationship"
            },
            {
                "lvl": "1",
                "name": "Sales Incentive Comp"
            },
            {
                "lvl": "3",
                "name": "Firmographic Data"
            },
            {
                "lvl": "1",
                "name": "Organization 360"
            },
            {
                "lvl": "3",
                "name": "Technographic Data"
            },
            {
                "lvl": "1",
                "name": "Enterprise Analytics"
            },
            {
                "lvl": "3",
                "name": "Financial Data"
            },
            {
                "lvl": "1",
                "name": "Self Service Analytics"
            },
            {
                "lvl": "3",
                "name": "Activity/Intent Data"
            },
            {
                "lvl": "1",
                "name": "Customer Health"
            },
            {
                "lvl": "3",
                "name": "Data Stewardship"
            },
            {
                "lvl": "1",
                "name": "M&A Management"
            },
            {
                "lvl": "3",
                "name": "Metadata Management"
            },
            {
                "lvl": "1",
                "name": "Streamlined Collections"
            },
            {
                "lvl": "3",
                "name": "Data Lineage & Impact"
            },
            {
                "lvl": "1",
                "name": "Financial & Compliance Rpt."
            },
            {
                "lvl": "3",
                "name": "Policies & Procedures"
            },
            {
                "lvl": "1",
                "name": "Regulatory Compliance"
            },
            {
                "lvl": "3",
                "name": "Data Privacy & Security"
            },
            {
                "lvl": "1",
                "name": "Risk Assessment"
            },
            {
                "lvl": "3",
                "name": "Data Tokenization"
            },
            {
                "lvl": "1",
                "name": "Tax Calculation"
            },
            {
                "lvl": "3",
                "name": "Ingress/Egress Patterns"
            },
            {
                "lvl": "1",
                "name": "Avoidance of Manual Work"
            },
            {
                "lvl": "3",
                "name": "API Management/Perf"
            },
            {
                "lvl": "1",
                "name": "Audit Transparency"
            },
            {
                "lvl": "3",
                "name": "Workflows"
            },
            {
                "lvl": "3",
                "name": "Audit/Exception Reporting"
            },
            {
                "lvl": "3",
                "name": "AI/ML Support"
            },
            {
                "lvl": "3",
                "name": "History Tracking"
            },
            {
                "lvl": "3",
                "name": "Observability"
            }
        ],
        "links": [
            {
                "target": "Top Line (Growth)",
                "source": "Prospect Marketing"
            },
            {
                "target": "Top Line (Growth)",
                "source": "Competitive Analysis"
            },
            {
                "target": "Top Line (Growth)",
                "source": "Customer Marketing"
            },
            {
                "target": "Top Line (Growth)",
                "source": "White Space Analysis"
            },
            {
                "target": "Top Line (Growth)",
                "source": "Marketing Effectiveness"
            },
            {
                "target": "Top Line (Growth)",
                "source": "Search Before Create"
            },
            {
                "target": "Top Line (Growth)",
                "source": "Omni-Channel Integration"
            },
            {
                "target": "Top Line (Growth)",
                "source": "Customer Segmentation"
            },
            {
                "target": "Top Line (Growth)",
                "source": "Pricing Optimization"
            },
            {
                "target": "Top Line (Growth)",
                "source": "Forecasting/Quota Alignment"
            },
            {
                "target": "Top Line (Growth)",
                "source": "Lead Account Match"
            },
            {
                "target": "Top Line (Growth)",
                "source": "Net New Logo"
            },
            {
                "target": "Top Line (Growth)",
                "source": "Sales Territory Management"
            },
            {
                "target": "Top Line (Growth)",
                "source": "Organization 360"
            },
            {
                "target": "Top Line (Growth)",
                "source": "Enterprise Analytics"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "Marketing Effectiveness"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "Search Before Create"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "Omni-Channel Integration"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "Pricing Optimization"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "Account Management"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "Sales Incentive Comp"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "Organization 360"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "Enterprise Analytics"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "Self Service Analytics"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "Customer Health"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "M&A Management"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "Streamlined Collections"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "Risk Assessment"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "Avoidance of Manual Work"
            },
            {
                "target": "Customer Experience",
                "source": "Web Registration"
            },
            {
                "target": "Customer Experience",
                "source": "Customer Health"
            },
            {
                "target": "Customer Experience",
                "source": "Tax Calculation"
            },
            {
                "target": "Compliance & Risk",
                "source": "Web Registration"
            },
            {
                "target": "Compliance & Risk",
                "source": "Sales Incentive Comp"
            },
            {
                "target": "Compliance & Risk",
                "source": "Organization 360"
            },
            {
                "target": "Compliance & Risk",
                "source": "Customer Health"
            },
            {
                "target": "Compliance & Risk",
                "source": "Financial & Compliance Rpt."
            },
            {
                "target": "Compliance & Risk",
                "source": "Regulatory Compliance"
            },
            {
                "target": "Compliance & Risk",
                "source": "Risk Assessment"
            },
            {
                "target": "Compliance & Risk",
                "source": "Avoidance of Manual Work"
            },
            {
                "target": "Compliance & Risk",
                "source": "Audit Transparency"
            },
            {
                "target": "Prospect Marketing",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Prospect Marketing",
                "source": "Accurate Information"
            },
            {
                "target": "Prospect Marketing",
                "source": "Customer Relationships"
            },
            {
                "target": "Prospect Marketing",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Competitive Analysis",
                "source": "Accurate Information"
            },
            {
                "target": "Competitive Analysis",
                "source": "Customer Relationships"
            },
            {
                "target": "Competitive Analysis",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Customer Marketing",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Customer Marketing",
                "source": "Accurate Information"
            },
            {
                "target": "Customer Marketing",
                "source": "Customer Relationships"
            },
            {
                "target": "Customer Marketing",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "White Space Analysis",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Marketing Effectiveness",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Marketing Effectiveness",
                "source": "Accurate Information"
            },
            {
                "target": "Marketing Effectiveness",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Search Before Create",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Search Before Create",
                "source": "Accurate Information"
            },
            {
                "target": "Search Before Create",
                "source": "Customer Relationships"
            },
            {
                "target": "Omni-Channel Integration",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Omni-Channel Integration",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Customer Segmentation",
                "source": "Accurate Information"
            },
            {
                "target": "Customer Segmentation",
                "source": "Customer Relationships"
            },
            {
                "target": "Customer Segmentation",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Web Registration",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Web Registration",
                "source": "Technology Framework"
            },
            {
                "target": "Pricing Optimization",
                "source": "Accurate Information"
            },
            {
                "target": "Pricing Optimization",
                "source": "Customer Relationships"
            },
            {
                "target": "Forecasting/Quota Alignment",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Lead Account Match",
                "source": "Accurate Information"
            },
            {
                "target": "Lead Account Match",
                "source": "Customer Relationships"
            },
            {
                "target": "Net New Logo",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Sales Territory Management",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Sales Territory Management",
                "source": "Accurate Information"
            },
            {
                "target": "Sales Territory Management",
                "source": "Customer Relationships"
            },
            {
                "target": "Sales Territory Management",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Account Management",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Account Management",
                "source": "Customer Relationships"
            },
            {
                "target": "Account Management",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Sales Incentive Comp",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Sales Incentive Comp",
                "source": "Customer Relationships"
            },
            {
                "target": "Sales Incentive Comp",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Organization 360",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Organization 360",
                "source": "Accurate Information"
            },
            {
                "target": "Organization 360",
                "source": "Customer Relationships"
            },
            {
                "target": "Organization 360",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Organization 360",
                "source": "Data Governance"
            },
            {
                "target": "Enterprise Analytics",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Enterprise Analytics",
                "source": "Accurate Information"
            },
            {
                "target": "Enterprise Analytics",
                "source": "Customer Relationships"
            },
            {
                "target": "Enterprise Analytics",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Enterprise Analytics",
                "source": "Data Governance"
            },
            {
                "target": "Self Service Analytics",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Self Service Analytics",
                "source": "Accurate Information"
            },
            {
                "target": "Self Service Analytics",
                "source": "Data Governance"
            },
            {
                "target": "Customer Health",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Customer Health",
                "source": "Accurate Information"
            },
            {
                "target": "Customer Health",
                "source": "Customer Relationships"
            },
            {
                "target": "Customer Health",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "M&A Management",
                "source": "Customer Relationships"
            },
            {
                "target": "M&A Management",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "M&A Management",
                "source": "Data Governance"
            },
            {
                "target": "Streamlined Collections",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Streamlined Collections",
                "source": "Accurate Information"
            },
            {
                "target": "Financial & Compliance Rpt.",
                "source": "Accurate Information"
            },
            {
                "target": "Financial & Compliance Rpt.",
                "source": "Customer Relationships"
            },
            {
                "target": "Financial & Compliance Rpt.",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Regulatory Compliance",
                "source": "Technology Framework"
            },
            {
                "target": "Risk Assessment",
                "source": "Customer Relationships"
            },
            {
                "target": "Risk Assessment",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Risk Assessment",
                "source": "Data Governance"
            },
            {
                "target": "Tax Calculation",
                "source": "Accurate Information"
            },
            {
                "target": "Tax Calculation",
                "source": "Customer Relationships"
            },
            {
                "target": "Tax Calculation",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Tax Calculation",
                "source": "Data Governance"
            },
            {
                "target": "Avoidance of Manual Work",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Avoidance of Manual Work",
                "source": "Accurate Information"
            },
            {
                "target": "Avoidance of Manual Work",
                "source": "Data Governance"
            },
            {
                "target": "Avoidance of Manual Work",
                "source": "Technology Framework"
            },
            {
                "target": "Audit Transparency",
                "source": "Data Governance"
            },
            {
                "target": "Audit Transparency",
                "source": "Technology Framework"
            },
            {
                "target": "Unique Customer Profile",
                "source": "Search before Create"
            },
            {
                "target": "Unique Customer Profile",
                "source": "Identity Attribute Mgt."
            },
            {
                "target": "Unique Customer Profile",
                "source": "Core Attribute Mgt."
            },
            {
                "target": "Unique Customer Profile",
                "source": "Match & Merge"
            },
            {
                "target": "Unique Customer Profile",
                "source": "Trust & Survivorship"
            },
            {
                "target": "Unique Customer Profile",
                "source": "External Match"
            },
            {
                "target": "Unique Customer Profile",
                "source": "MDMID Cross Reference"
            },
            {
                "target": "Accurate Information",
                "source": "Synonym Replacement"
            },
            {
                "target": "Accurate Information",
                "source": "Validation Rules"
            },
            {
                "target": "Accurate Information",
                "source": "Business Verification"
            },
            {
                "target": "Accurate Information",
                "source": "Address Validation"
            },
            {
                "target": "Customer Relationships",
                "source": "Hierarchy Modeling"
            },
            {
                "target": "Customer Relationships",
                "source": "Related Entities"
            },
            {
                "target": "Customer Relationships",
                "source": "Product Master Relationship"
            },
            {
                "target": "Customer Relationships",
                "source": "Contact Master Relationship"
            },
            {
                "target": "3rd Party Enrichment",
                "source": "Firmographic Data"
            },
            {
                "target": "3rd Party Enrichment",
                "source": "Technographic Data"
            },
            {
                "target": "3rd Party Enrichment",
                "source": "Financial Data"
            },
            {
                "target": "3rd Party Enrichment",
                "source": "Activity/Intent Data"
            },
            {
                "target": "Data Governance",
                "source": "Data Stewardship"
            },
            {
                "target": "Data Governance",
                "source": "Metadata Management"
            },
            {
                "target": "Data Governance",
                "source": "Data Lineage & Impact"
            },
            {
                "target": "Data Governance",
                "source": "Policies & Procedures"
            },
            {
                "target": "Data Governance",
                "source": "Data Privacy & Security"
            },
            {
                "target": "Technology Framework",
                "source": "Data Tokenization"
            },
            {
                "target": "Technology Framework",
                "source": "Ingress/Egress Patterns"
            },
            {
                "target": "Technology Framework",
                "source": "API Management/Perf"
            },
            {
                "target": "Technology Framework",
                "source": "Workflows"
            },
            {
                "target": "Technology Framework",
                "source": "Audit/Exception Reporting"
            },
            {
                "target": "Technology Framework",
                "source": "AI/ML Support"
            },
            {
                "target": "Technology Framework",
                "source": "History Tracking"
            },
            {
                "target": "Technology Framework",
                "source": "Observability"
            }
        ]
    }


    

    // var nodes = [];
    // var links = [];
    var lvlCount = 0;

    var data = {
        "nodes": [
            {
                "lvl": "0",
                "name": "Top Line (Growth)"
            },
            {
                "lvl": "1",
                "name": "Prospect Marketing"
            },
            {
                "lvl": "2",
                "name": "Unique Customer Profile"
            },
            {
                "lvl": "3",
                "name": "Identity Attribute Mgt."
            },
            {
                "lvl": "0",
                "name": "Bottomline (Optimization)"
            },
            {
                "lvl": "1",
                "name": "Competitive Analysis"
            },
            {
                "lvl": "2",
                "name": "Accurate Information"
            },
            {
                "lvl": "3",
                "name": "Core Attribute Mgt."
            },
            {
                "lvl": "0",
                "name": "Customer Experience"
            },
            {
                "lvl": "1",
                "name": "Customer Marketing"
            },
            {
                "lvl": "2",
                "name": "Customer Relationships"
            },
            {
                "lvl": "3",
                "name": "Search before Create"
            },
            {
                "lvl": "0",
                "name": "Compliance & Risk"
            },
            {
                "lvl": "1",
                "name": "White Space Analysis"
            },
            {
                "lvl": "2",
                "name": "3rd Party Enrichment"
            },
            {
                "lvl": "3",
                "name": "Match & Merge"
            },
            {
                "lvl": "1",
                "name": "Marketing Effectiveness"
            },
            {
                "lvl": "2",
                "name": "Data Governance"
            },
            {
                "lvl": "3",
                "name": "Trust & Survivorship"
            },
            {
                "lvl": "1",
                "name": "Search Before Create"
            },
            {
                "lvl": "2",
                "name": "Technology Framework"
            },
            {
                "lvl": "3",
                "name": "External Match"
            },
            {
                "lvl": "1",
                "name": "Omni-Channel Integration"
            },
            {
                "lvl": "3",
                "name": "MDMID Cross Reference"
            },
            {
                "lvl": "1",
                "name": "Customer Segmentation"
            },
            {
                "lvl": "3",
                "name": "Synonym Replacement"
            },
            {
                "lvl": "1",
                "name": "Web Registration"
            },
            {
                "lvl": "3",
                "name": "Validation Rules"
            },
            {
                "lvl": "1",
                "name": "Pricing Optimization"
            },
            {
                "lvl": "3",
                "name": "Business Verification"
            },
            {
                "lvl": "1",
                "name": "Forecasting/Quota Alignment"
            },
            {
                "lvl": "3",
                "name": "Address Validation"
            },
            {
                "lvl": "1",
                "name": "Lead Account Match"
            },
            {
                "lvl": "3",
                "name": "Hierarchy Modeling"
            },
            {
                "lvl": "1",
                "name": "Net New Logo"
            },
            {
                "lvl": "3",
                "name": "Related Entities"
            },
            {
                "lvl": "1",
                "name": "Sales Territory Management"
            },
            {
                "lvl": "3",
                "name": "Product Master Relationship"
            },
            {
                "lvl": "1",
                "name": "Account Management"
            },
            {
                "lvl": "3",
                "name": "Contact Master Relationship"
            },
            {
                "lvl": "1",
                "name": "Sales Incentive Comp"
            },
            {
                "lvl": "3",
                "name": "Firmographic Data"
            },
            {
                "lvl": "1",
                "name": "Organization 360"
            },
            {
                "lvl": "3",
                "name": "Technographic Data"
            },
            {
                "lvl": "1",
                "name": "Enterprise Analytics"
            },
            {
                "lvl": "3",
                "name": "Financial Data"
            },
            {
                "lvl": "1",
                "name": "Self Service Analytics"
            },
            {
                "lvl": "3",
                "name": "Activity/Intent Data"
            },
            {
                "lvl": "1",
                "name": "Customer Health"
            },
            {
                "lvl": "3",
                "name": "Data Stewardship"
            },
            {
                "lvl": "1",
                "name": "M&A Management"
            },
            {
                "lvl": "3",
                "name": "Metadata Management"
            },
            {
                "lvl": "1",
                "name": "Streamlined Collections"
            },
            {
                "lvl": "3",
                "name": "Data Lineage & Impact"
            },
            {
                "lvl": "1",
                "name": "Financial & Compliance Rpt."
            },
            {
                "lvl": "3",
                "name": "Policies & Procedures"
            },
            {
                "lvl": "1",
                "name": "Regulatory Compliance"
            },
            {
                "lvl": "3",
                "name": "Data Privacy & Security"
            },
            {
                "lvl": "1",
                "name": "Risk Assessment"
            },
            {
                "lvl": "3",
                "name": "Data Tokenization"
            },
            {
                "lvl": "1",
                "name": "Tax Calculation"
            },
            {
                "lvl": "3",
                "name": "Ingress/Egress Patterns"
            },
            {
                "lvl": "1",
                "name": "Avoidance of Manual Work"
            },
            {
                "lvl": "3",
                "name": "API Management/Perf"
            },
            {
                "lvl": "1",
                "name": "Audit Transparency"
            },
            {
                "lvl": "3",
                "name": "Workflows"
            },
            {
                "lvl": "3",
                "name": "Audit/Exception Reporting"
            },
            {
                "lvl": "3",
                "name": "AI/ML Support"
            },
            {
                "lvl": "3",
                "name": "History Tracking"
            },
            {
                "lvl": "3",
                "name": "Observability"
            }
        ],
        "links": [
            {
                "target": "Top Line (Growth)",
                "source": "Prospect Marketing"
            },
            {
                "target": "Top Line (Growth)",
                "source": "Competitive Analysis"
            },
            {
                "target": "Top Line (Growth)",
                "source": "Customer Marketing"
            },
            {
                "target": "Top Line (Growth)",
                "source": "White Space Analysis"
            },
            {
                "target": "Top Line (Growth)",
                "source": "Marketing Effectiveness"
            },
            {
                "target": "Top Line (Growth)",
                "source": "Search Before Create"
            },
            {
                "target": "Top Line (Growth)",
                "source": "Omni-Channel Integration"
            },
            {
                "target": "Top Line (Growth)",
                "source": "Customer Segmentation"
            },
            {
                "target": "Top Line (Growth)",
                "source": "Pricing Optimization"
            },
            {
                "target": "Top Line (Growth)",
                "source": "Forecasting/Quota Alignment"
            },
            {
                "target": "Top Line (Growth)",
                "source": "Lead Account Match"
            },
            {
                "target": "Top Line (Growth)",
                "source": "Net New Logo"
            },
            {
                "target": "Top Line (Growth)",
                "source": "Sales Territory Management"
            },
            {
                "target": "Top Line (Growth)",
                "source": "Organization 360"
            },
            {
                "target": "Top Line (Growth)",
                "source": "Enterprise Analytics"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "Marketing Effectiveness"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "Search Before Create"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "Omni-Channel Integration"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "Pricing Optimization"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "Account Management"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "Sales Incentive Comp"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "Organization 360"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "Enterprise Analytics"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "Self Service Analytics"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "Customer Health"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "M&A Management"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "Streamlined Collections"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "Risk Assessment"
            },
            {
                "target": "Bottomline (Optimization)",
                "source": "Avoidance of Manual Work"
            },
            {
                "target": "Customer Experience",
                "source": "Web Registration"
            },
            {
                "target": "Customer Experience",
                "source": "Customer Health"
            },
            {
                "target": "Customer Experience",
                "source": "Tax Calculation"
            },
            {
                "target": "Compliance & Risk",
                "source": "Web Registration"
            },
            {
                "target": "Compliance & Risk",
                "source": "Sales Incentive Comp"
            },
            {
                "target": "Compliance & Risk",
                "source": "Organization 360"
            },
            {
                "target": "Compliance & Risk",
                "source": "Customer Health"
            },
            {
                "target": "Compliance & Risk",
                "source": "Financial & Compliance Rpt."
            },
            {
                "target": "Compliance & Risk",
                "source": "Regulatory Compliance"
            },
            {
                "target": "Compliance & Risk",
                "source": "Risk Assessment"
            },
            {
                "target": "Compliance & Risk",
                "source": "Avoidance of Manual Work"
            },
            {
                "target": "Compliance & Risk",
                "source": "Audit Transparency"
            },
            {
                "target": "Prospect Marketing",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Prospect Marketing",
                "source": "Accurate Information"
            },
            {
                "target": "Prospect Marketing",
                "source": "Customer Relationships"
            },
            {
                "target": "Prospect Marketing",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Competitive Analysis",
                "source": "Accurate Information"
            },
            {
                "target": "Competitive Analysis",
                "source": "Customer Relationships"
            },
            {
                "target": "Competitive Analysis",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Customer Marketing",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Customer Marketing",
                "source": "Accurate Information"
            },
            {
                "target": "Customer Marketing",
                "source": "Customer Relationships"
            },
            {
                "target": "Customer Marketing",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "White Space Analysis",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Marketing Effectiveness",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Marketing Effectiveness",
                "source": "Accurate Information"
            },
            {
                "target": "Marketing Effectiveness",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Search Before Create",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Search Before Create",
                "source": "Accurate Information"
            },
            {
                "target": "Search Before Create",
                "source": "Customer Relationships"
            },
            {
                "target": "Omni-Channel Integration",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Omni-Channel Integration",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Customer Segmentation",
                "source": "Accurate Information"
            },
            {
                "target": "Customer Segmentation",
                "source": "Customer Relationships"
            },
            {
                "target": "Customer Segmentation",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Web Registration",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Web Registration",
                "source": "Technology Framework"
            },
            {
                "target": "Pricing Optimization",
                "source": "Accurate Information"
            },
            {
                "target": "Pricing Optimization",
                "source": "Customer Relationships"
            },
            {
                "target": "Forecasting/Quota Alignment",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Lead Account Match",
                "source": "Accurate Information"
            },
            {
                "target": "Lead Account Match",
                "source": "Customer Relationships"
            },
            {
                "target": "Net New Logo",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Sales Territory Management",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Sales Territory Management",
                "source": "Accurate Information"
            },
            {
                "target": "Sales Territory Management",
                "source": "Customer Relationships"
            },
            {
                "target": "Sales Territory Management",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Account Management",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Account Management",
                "source": "Customer Relationships"
            },
            {
                "target": "Account Management",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Sales Incentive Comp",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Sales Incentive Comp",
                "source": "Customer Relationships"
            },
            {
                "target": "Sales Incentive Comp",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Organization 360",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Organization 360",
                "source": "Accurate Information"
            },
            {
                "target": "Organization 360",
                "source": "Customer Relationships"
            },
            {
                "target": "Organization 360",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Organization 360",
                "source": "Data Governance"
            },
            {
                "target": "Enterprise Analytics",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Enterprise Analytics",
                "source": "Accurate Information"
            },
            {
                "target": "Enterprise Analytics",
                "source": "Customer Relationships"
            },
            {
                "target": "Enterprise Analytics",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Enterprise Analytics",
                "source": "Data Governance"
            },
            {
                "target": "Self Service Analytics",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Self Service Analytics",
                "source": "Accurate Information"
            },
            {
                "target": "Self Service Analytics",
                "source": "Data Governance"
            },
            {
                "target": "Customer Health",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Customer Health",
                "source": "Accurate Information"
            },
            {
                "target": "Customer Health",
                "source": "Customer Relationships"
            },
            {
                "target": "Customer Health",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "M&A Management",
                "source": "Customer Relationships"
            },
            {
                "target": "M&A Management",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "M&A Management",
                "source": "Data Governance"
            },
            {
                "target": "Streamlined Collections",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Streamlined Collections",
                "source": "Accurate Information"
            },
            {
                "target": "Financial & Compliance Rpt.",
                "source": "Accurate Information"
            },
            {
                "target": "Financial & Compliance Rpt.",
                "source": "Customer Relationships"
            },
            {
                "target": "Financial & Compliance Rpt.",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Regulatory Compliance",
                "source": "Technology Framework"
            },
            {
                "target": "Risk Assessment",
                "source": "Customer Relationships"
            },
            {
                "target": "Risk Assessment",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Risk Assessment",
                "source": "Data Governance"
            },
            {
                "target": "Tax Calculation",
                "source": "Accurate Information"
            },
            {
                "target": "Tax Calculation",
                "source": "Customer Relationships"
            },
            {
                "target": "Tax Calculation",
                "source": "3rd Party Enrichment"
            },
            {
                "target": "Tax Calculation",
                "source": "Data Governance"
            },
            {
                "target": "Avoidance of Manual Work",
                "source": "Unique Customer Profile"
            },
            {
                "target": "Avoidance of Manual Work",
                "source": "Accurate Information"
            },
            {
                "target": "Avoidance of Manual Work",
                "source": "Data Governance"
            },
            {
                "target": "Avoidance of Manual Work",
                "source": "Technology Framework"
            },
            {
                "target": "Audit Transparency",
                "source": "Data Governance"
            },
            {
                "target": "Audit Transparency",
                "source": "Technology Framework"
            },
            {
                "target": "Unique Customer Profile",
                "source": "Search before Create"
            },
            {
                "target": "Unique Customer Profile",
                "source": "Identity Attribute Mgt."
            },
            {
                "target": "Unique Customer Profile",
                "source": "Core Attribute Mgt."
            },
            {
                "target": "Unique Customer Profile",
                "source": "Match & Merge"
            },
            {
                "target": "Unique Customer Profile",
                "source": "Trust & Survivorship"
            },
            {
                "target": "Unique Customer Profile",
                "source": "External Match"
            },
            {
                "target": "Unique Customer Profile",
                "source": "MDMID Cross Reference"
            },
            {
                "target": "Accurate Information",
                "source": "Synonym Replacement"
            },
            {
                "target": "Accurate Information",
                "source": "Validation Rules"
            },
            {
                "target": "Accurate Information",
                "source": "Business Verification"
            },
            {
                "target": "Accurate Information",
                "source": "Address Validation"
            },
            {
                "target": "Customer Relationships",
                "source": "Hierarchy Modeling"
            },
            {
                "target": "Customer Relationships",
                "source": "Related Entities"
            },
            {
                "target": "Customer Relationships",
                "source": "Product Master Relationship"
            },
            {
                "target": "Customer Relationships",
                "source": "Contact Master Relationship"
            },
            {
                "target": "3rd Party Enrichment",
                "source": "Firmographic Data"
            },
            {
                "target": "3rd Party Enrichment",
                "source": "Technographic Data"
            },
            {
                "target": "3rd Party Enrichment",
                "source": "Financial Data"
            },
            {
                "target": "3rd Party Enrichment",
                "source": "Activity/Intent Data"
            },
            {
                "target": "Data Governance",
                "source": "Data Stewardship"
            },
            {
                "target": "Data Governance",
                "source": "Metadata Management"
            },
            {
                "target": "Data Governance",
                "source": "Data Lineage & Impact"
            },
            {
                "target": "Data Governance",
                "source": "Policies & Procedures"
            },
            {
                "target": "Data Governance",
                "source": "Data Privacy & Security"
            },
            {
                "target": "Technology Framework",
                "source": "Data Tokenization"
            },
            {
                "target": "Technology Framework",
                "source": "Ingress/Egress Patterns"
            },
            {
                "target": "Technology Framework",
                "source": "API Management/Perf"
            },
            {
                "target": "Technology Framework",
                "source": "Workflows"
            },
            {
                "target": "Technology Framework",
                "source": "Audit/Exception Reporting"
            },
            {
                "target": "Technology Framework",
                "source": "AI/ML Support"
            },
            {
                "target": "Technology Framework",
                "source": "History Tracking"
            },
            {
                "target": "Technology Framework",
                "source": "Observability"
            }
        ]
    }

    console.log(data);
    
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
          
            
            
    var UseCasesData = [{"link": "https://www.google.com/Prospect Marketing"}, {"link": "https://www.google.com/Competitive Analysis"}, {"link": "https://www.google.com/Customer Marketing"}, {"link": "https://www.google.com/White Space Analysis"}, {"link": "https://www.google.com/Marketing Effectiveness"}, {"link": "https://www.google.com/Search Before Create"}, {"link": "https://www.google.com/Omni-Channel Integration"}, {"link": "https://www.google.com/Customer Segmentation"}, {"link": "https://www.google.com/Web Registration"}, {"link": "https://www.google.com/Pricing Optimization"}, {"link": "https://www.google.com/Forecasting/Quota Alignment"}, {"link": "https://www.google.com/Lead Account Match"}, {"link": "https://www.google.com/Net New Logo"}, {"link": "https://www.google.com/Sales Territory Management"}, {"link": "https://www.google.com/Account Management"}, {"link": "https://www.google.com/Sales Incentive Comp"}, {"link": "https://www.google.com/Organization 360"}, {"link": "https://www.google.com/Enterprise Analytics"}, {"link": "https://www.google.com/Self Service Analytics"}, {"link": "https://www.google.com/Customer Health"}, {"link": "https://www.google.com/M&A Management"}, {"link": "https://www.google.com/Streamlined Collections"}, {"link": "https://www.google.com/Financial & Compliance Rpt."}, {"link": "https://www.google.com/Regulatory Compliance"}, {"link": "https://www.google.com/Risk Assessment"}, {"link": "https://www.google.com/Tax Calculation"}, {"link": "https://www.google.com/Avoidance of Manual Work"}, {"link": "https://www.google.com/Audit Transparency"}]; var FeaturesNodesData = [{"link": "https://www.google.com/Identity Attribute Mgt."}, {"link": "https://www.google.com/Core Attribute Mgt."}, {"link": "https://www.google.com/Search before Create"}, {"link": "https://www.google.com/Match & Merge"}, {"link": "https://www.google.com/Trust & Survivorship"}, {"link": "https://www.google.com/External Match"}, {"link": "https://www.google.com/MDMID Cross Reference"}, {"link": "https://www.google.com/Synonym Replacement"}, {"link": "https://www.google.com/Validation Rules"}, {"link": "https://www.google.com/Business Verification"}, {"link": "https://www.google.com/Address Validation"}, {"link": "https://www.google.com/Hierarchy Modeling"}, {"link": "https://www.google.com/Related Entities"}, {"link": "https://www.google.com/Product Master Relationship"}, {"link": "https://www.google.com/Contact Master Relationship"}, {"link": "https://www.google.com/Firmographic Data"}, {"link": "https://www.google.com/Technographic Data"}, {"link": "https://www.google.com/Financial Data"}, {"link": "https://www.google.com/Activity/Intent Data"}, {"link": "https://www.google.com/Data Stewardship"}, {"link": "https://www.google.com/Metadata Management"}, {"link": "https://www.google.com/Data Lineage & Impact"}, {"link": "https://www.google.com/Policies & Procedures"}, {"link": "https://www.google.com/Data Privacy & Security"}, {"link": "https://www.google.com/Data Tokenization"}, {"link": "https://www.google.com/Ingress/Egress Patterns"}, {"link": "https://www.google.com/API Management/Perf"}, {"link": "https://www.google.com/Workflows"}, {"link": "https://www.google.com/Audit/Exception Reporting"}, {"link": "https://www.google.com/AI/ML Support"}, {"link": "https://www.google.com/History Tracking"}, {"link": "https://www.google.com/Observability"}]; 
    
    
    
    
    
    
    var businessValueNodesCount = nodes.filter(function(d) {
        return d.lvl == 0; // Adjust 0 to the appropriate level number for "Business Value"
    }).length;
    
    var useCasesCount = nodes.filter(function(d) {
        return d.lvl == 1; // Adjust 0 to the appropriate level number for "Business Value"
    }).length;
    
    var capabilitiesCount = nodes.filter(function(d) {
        return d.lvl == 2; // Adjust 0 to the appropriate level number for "Business Value"
    }).length;
    
    node.each(function(d, i) {
        if (d.lvl == 1) {
            var smallerBox = d3.select(this)
                .append("rect")
                .attr("x", d.x + 0.95 * box_width) // Position it to the right side
                .attr("y", d.y)
                .attr("id", d.id + "-smaller-box")
                .attr("width", 0.05*box_width)
                .attr("height", 0.66*box_height)
                .attr("class", "smaller-box")
                .attr("rx", 2*box_width)
                .attr("ry", 0.66*box_height)
                
                
           d3.select(this)
        .append("text")
        .attr("x", d.x + 0.972 * box_width) // Adjust position for text
        .attr("y", d.y + 0.25 * box_height) // Adjust position for text
        .attr("text-anchor", "middle") // Center text horizontally
        .attr("alignment-baseline", "middle") // Center text vertically
        .text("...")
        .style("cursor", "pointer") // Set cursor to pointer
        .on("click", function(d) {
            window.open(UseCasesData[i-businessValueNodesCount].link, "_blank");
        });
    
                
                
        }
    });
    
    node.each(function(d, i) {
        if (d.lvl == 3) {
            var smallerBox = d3.select(this)
                .append("rect")
                .attr("x", d.x + 0.95 * box_width) // Position it to the right side
                .attr("y", d.y)
                .attr("id", d.id + "-smaller-box")
                .attr("width", 0.05*box_width)
                .attr("height", 0.66*box_height)
                .attr("class", "smaller-box")
                .attr("rx", 2*box_width)
                .attr("ry", 0.66*box_height)
                
                
           d3.select(this)
        .append("text")
        .attr("x", d.x + 0.972 * box_width) // Adjust position for text
        .attr("y", d.y + 0.25 * box_height) // Adjust position for text
        .attr("text-anchor", "middle") // Center text horizontally
        .attr("alignment-baseline", "middle") // Center text vertically
        .text("...")
        .style("cursor", "pointer") // Set cursor to pointer
        .on("click", function(d) {
            window.open(FeaturesNodesData[i-businessValueNodesCount-useCasesCount-capabilitiesCount].link, "_blank");
        });
    
                
                
        }
    });
    
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
    
    
    create_relationship_diagram(data);
    

