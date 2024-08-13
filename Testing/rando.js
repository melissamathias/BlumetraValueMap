
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
    "nodes":[
    {
        "lvl": "0",
        "name": "Top Line (Growth)"
    },
    {
        "lvl": "0",
        "name": "Bottomline (Optimization)"
    },
    {
        "lvl": "0",
        "name": "Customer Experience"
    },
    {
        "lvl": "0",
        "name": "Compliance & Risk"
    },
    {
        "lvl": "1",
        "name": "Prospect Marketing"
    },
    {
        "lvl": "1",
        "name": "Competitive Analysis"
    },
    {
        "lvl": "1",
        "name": "Customer Marketing"
    },
    {
        "lvl": "1",
        "name": "White Space Analysis"
    },
    {
        "lvl": "1",
        "name": "Marketing Effectiveness"
    },
    {
        "lvl": "1",
        "name": "Search Before Create"
    },
    {
        "lvl": "1",
        "name": "Omni-Channel Integration"
    },
    {
        "lvl": "1",
        "name": "Customer Segmentation"
    },
    {
        "lvl": "1",
        "name": "Web Registration"
    },
    {
        "lvl": "1",
        "name": "Pricing Optimization"
    },
    {
        "lvl": "1",
        "name": "Forecasting/Quota Alignment"
    },
    {
        "lvl": "1",
        "name": "Lead Account Match"
    },
    {
        "lvl": "1",
        "name": "Net New Logo"
    },
    {
        "lvl": "1",
        "name": "Sales Territory Management"
    },
    {
        "lvl": "1",
        "name": "Account Management"
    },
    {
        "lvl": "1",
        "name": "Sales Incentive Comp"
    },
    {
        "lvl": "1",
        "name": "Organization 360"
    },
    {
        "lvl": "1",
        "name": "Enterprise Analytics"
    },
    {
        "lvl": "1",
        "name": "Self Service Analytics"
    },
    {
        "lvl": "1",
        "name": "Customer Health"
    },
    {
        "lvl": "1",
        "name": "M&A Management"
    },
    {
        "lvl": "1",
        "name": "Streamlined Collections"
    },
    {
        "lvl": "1",
        "name": "Financial & Compliance Rpt."
    },
    {
        "lvl": "1",
        "name": "Regulatory Compliance"
    },
    {
        "lvl": "1",
        "name": "Risk Assessment"
    },
    {
        "lvl": "1",
        "name": "Tax Calculation"
    },
    {
        "lvl": "1",
        "name": "Avoidance of Manual Work"
    },
    {
        "lvl": "1",
        "name": "Audit Transparency"
    },
    {
        "lvl": "2",
        "name": "Unique Customer Profile"
    },
    {
        "lvl": "2",
        "name": "Accurate Information"
    },
    {
        "lvl": "2",
        "name": "Customer Relationships"
    },
    {
        "lvl": "2",
        "name": "3rd Party Enrichment"
    },
    {
        "lvl": "2",
        "name": "Data Governance"
    },
    {
        "lvl": "2",
        "name": "Technology Framework"
    },
    {
        "lvl": "3",
        "name": "Identity Attribute Mgt."
    },
    {
        "lvl": "3",
        "name": "Core Attribute Mgt."
    },
    {
        "lvl": "3",
        "name": "Search before Create"
    },
    {
        "lvl": "3",
        "name": "Match & Merge"
    },
    {
        "lvl": "3",
        "name": "Trust & Survivorship"
    },
    {
        "lvl": "3",
        "name": "External Match"
    },
    {
        "lvl": "3",
        "name": "MDMID Cross Reference"
    },
    {
        "lvl": "3",
        "name": "Synonym Replacement"
    },
    {
        "lvl": "3",
        "name": "Validation Rules"
    },
    {
        "lvl": "3",
        "name": "Business Verification"
    },
    {
        "lvl": "3",
        "name": "Address Validation"
    },
    {
        "lvl": "3",
        "name": "Hierarchy Modeling"
    },
    {
        "lvl": "3",
        "name": "Related Entities"
    },
    {
        "lvl": "3",
        "name": "Product Master Relationship"
    },
    {
        "lvl": "3",
        "name": "Contact Master Relationship"
    },
    {
        "lvl": "3",
        "name": "Firmographic Data"
    },
    {
        "lvl": "3",
        "name": "Technographic Data"
    },
    {
        "lvl": "3",
        "name": "Financial Data"
    },
    {
        "lvl": "3",
        "name": "Activity/Intent Data"
    },
    {
        "lvl": "3",
        "name": "Data Stewardship"
    },
    {
        "lvl": "3",
        "name": "Metadata Management"
    },
    {
        "lvl": "3",
        "name": "Data Lineage & Impact"
    },
    {
        "lvl": "3",
        "name": "Policies & Procedures"
    },
    {
        "lvl": "3",
        "name": "Data Privacy & Security"
    },
    {
        "lvl": "3",
        "name": "Data Tokenization"
    },
    {
        "lvl": "3",
        "name": "Ingress/Egress Patterns"
    },
    {
        "lvl": "3",
        "name": "API Management/Perf"
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
    "links":[
    {
        "source": "Top Line (Growth)",
        "target": "Prospect Marketing"
    },
    {
        "source": "Top Line (Growth)",
        "target": "Competitive Analysis"
    },
    {
        "source": "Top Line (Growth)",
        "target": "Customer Marketing"
    },
    {
        "source": "Top Line (Growth)",
        "target": "White Space Analysis"
    },
    {
        "source": "Top Line (Growth)",
        "target": "Marketing Effectiveness"
    },
    {
        "source": "Top Line (Growth)",
        "target": "Search Before Create"
    },
    {
        "source": "Top Line (Growth)",
        "target": "Omni-Channel Integration"
    },
    {
        "source": "Top Line (Growth)",
        "target": "Customer Segmentation"
    },
    {
        "source": "Top Line (Growth)",
        "target": "Pricing Optimization"
    },
    {
        "source": "Top Line (Growth)",
        "target": "Forecasting/Quota Alignment"
    },
    {
        "source": "Top Line (Growth)",
        "target": "Lead Account Match"
    },
    {
        "source": "Top Line (Growth)",
        "target": "Net New Logo"
    },
    {
        "source": "Top Line (Growth)",
        "target": "Sales Territory Management"
    },
    {
        "source": "Top Line (Growth)",
        "target": "Organization 360"
    },
    {
        "source": "Top Line (Growth)",
        "target": "Enterprise Analytics"
    },
    {
        "source": "Bottomline (Optimization)",
        "target": "Marketing Effectiveness"
    },
    {
        "source": "Bottomline (Optimization)",
        "target": "Search Before Create"
    },
    {
        "source": "Bottomline (Optimization)",
        "target": "Omni-Channel Integration"
    },
    {
        "source": "Bottomline (Optimization)",
        "target": "Pricing Optimization"
    },
    {
        "source": "Bottomline (Optimization)",
        "target": "Account Management"
    },
    {
        "source": "Bottomline (Optimization)",
        "target": "Sales Incentive Comp"
    },
    {
        "source": "Bottomline (Optimization)",
        "target": "Organization 360"
    },
    {
        "source": "Bottomline (Optimization)",
        "target": "Enterprise Analytics"
    },
    {
        "source": "Bottomline (Optimization)",
        "target": "Self Service Analytics"
    },
    {
        "source": "Bottomline (Optimization)",
        "target": "Customer Health"
    },
    {
        "source": "Bottomline (Optimization)",
        "target": "M&A Management"
    },
    {
        "source": "Bottomline (Optimization)",
        "target": "Streamlined Collections"
    },
    {
        "source": "Bottomline (Optimization)",
        "target": "Risk Assessment"
    },
    {
        "source": "Bottomline (Optimization)",
        "target": "Avoidance of Manual Work"
    },
    {
        "source": "Customer Experience",
        "target": "Web Registration"
    },
    {
        "source": "Customer Experience",
        "target": "Customer Health"
    },
    {
        "source": "Customer Experience",
        "target": "Tax Calculation"
    },
    {
        "source": "Compliance & Risk",
        "target": "Web Registration"
    },
    {
        "source": "Compliance & Risk",
        "target": "Sales Incentive Comp"
    },
    {
        "source": "Compliance & Risk",
        "target": "Organization 360"
    },
    {
        "source": "Compliance & Risk",
        "target": "Customer Health"
    },
    {
        "source": "Compliance & Risk",
        "target": "Financial & Compliance Rpt."
    },
    {
        "source": "Compliance & Risk",
        "target": "Regulatory Compliance"
    },
    {
        "source": "Compliance & Risk",
        "target": "Risk Assessment"
    },
    {
        "source": "Compliance & Risk",
        "target": "Avoidance of Manual Work"
    },
    {
        "source": "Compliance & Risk",
        "target": "Audit Transparency"
    },
    {
        "source": "Prospect Marketing",
        "target": "Unique Customer Profile"
    },
    {
        "source": "Prospect Marketing",
        "target": "Accurate Information"
    },
    {
        "source": "Prospect Marketing",
        "target": "Customer Relationships"
    },
    {
        "source": "Prospect Marketing",
        "target": "3rd Party Enrichment"
    },
    {
        "source": "Competitive Analysis",
        "target": "Accurate Information"
    },
    {
        "source": "Competitive Analysis",
        "target": "Customer Relationships"
    },
    {
        "source": "Competitive Analysis",
        "target": "3rd Party Enrichment"
    },
    {
        "source": "Customer Marketing",
        "target": "Unique Customer Profile"
    },
    {
        "source": "Customer Marketing",
        "target": "Accurate Information"
    },
    {
        "source": "Customer Marketing",
        "target": "Customer Relationships"
    },
    {
        "source": "Customer Marketing",
        "target": "3rd Party Enrichment"
    },
    {
        "source": "White Space Analysis",
        "target": "3rd Party Enrichment"
    },
    {
        "source": "Marketing Effectiveness",
        "target": "Unique Customer Profile"
    },
    {
        "source": "Marketing Effectiveness",
        "target": "Accurate Information"
    },
    {
        "source": "Marketing Effectiveness",
        "target": "3rd Party Enrichment"
    },
    {
        "source": "Search Before Create",
        "target": "Unique Customer Profile"
    },
    {
        "source": "Search Before Create",
        "target": "Accurate Information"
    },
    {
        "source": "Search Before Create",
        "target": "Customer Relationships"
    },
    {
        "source": "Omni-Channel Integration",
        "target": "Unique Customer Profile"
    },
    {
        "source": "Omni-Channel Integration",
        "target": "3rd Party Enrichment"
    },
    {
        "source": "Customer Segmentation",
        "target": "Accurate Information"
    },
    {
        "source": "Customer Segmentation",
        "target": "Customer Relationships"
    },
    {
        "source": "Customer Segmentation",
        "target": "3rd Party Enrichment"
    },
    {
        "source": "Web Registration",
        "target": "Unique Customer Profile"
    },
    {
        "source": "Web Registration",
        "target": "Technology Framework"
    },
    {
        "source": "Pricing Optimization",
        "target": "Accurate Information"
    },
    {
        "source": "Pricing Optimization",
        "target": "Customer Relationships"
    },
    {
        "source": "Forecasting/Quota Alignment",
        "target": "Unique Customer Profile"
    },
    {
        "source": "Lead Account Match",
        "target": "Accurate Information"
    },
    {
        "source": "Lead Account Match",
        "target": "Customer Relationships"
    },
    {
        "source": "Net New Logo",
        "target": "Unique Customer Profile"
    },
    {
        "source": "Sales Territory Management",
        "target": "Unique Customer Profile"
    },
    {
        "source": "Sales Territory Management",
        "target": "Accurate Information"
    },
    {
        "source": "Sales Territory Management",
        "target": "Customer Relationships"
    },
    {
        "source": "Sales Territory Management",
        "target": "3rd Party Enrichment"
    },
    {
        "source": "Account Management",
        "target": "Unique Customer Profile"
    },
    {
        "source": "Account Management",
        "target": "Customer Relationships"
    },
    {
        "source": "Account Management",
        "target": "3rd Party Enrichment"
    },
    {
        "source": "Sales Incentive Comp",
        "target": "Unique Customer Profile"
    },
    {
        "source": "Sales Incentive Comp",
        "target": "Customer Relationships"
    },
    {
        "source": "Sales Incentive Comp",
        "target": "3rd Party Enrichment"
    },
    {
        "source": "Organization 360",
        "target": "Unique Customer Profile"
    },
    {
        "source": "Organization 360",
        "target": "Accurate Information"
    },
    {
        "source": "Organization 360",
        "target": "Customer Relationships"
    },
    {
        "source": "Organization 360",
        "target": "3rd Party Enrichment"
    },
    {
        "source": "Organization 360",
        "target": "Data Governance"
    },
    {
        "source": "Enterprise Analytics",
        "target": "Unique Customer Profile"
    },
    {
        "source": "Enterprise Analytics",
        "target": "Accurate Information"
    },
    {
        "source": "Enterprise Analytics",
        "target": "Customer Relationships"
    },
    {
        "source": "Enterprise Analytics",
        "target": "3rd Party Enrichment"
    },
    {
        "source": "Enterprise Analytics",
        "target": "Data Governance"
    },
    {
        "source": "Self Service Analytics",
        "target": "Unique Customer Profile"
    },
    {
        "source": "Self Service Analytics",
        "target": "Accurate Information"
    },
    {
        "source": "Self Service Analytics",
        "target": "Data Governance"
    },
    {
        "source": "Customer Health",
        "target": "Unique Customer Profile"
    },
    {
        "source": "Customer Health",
        "target": "Accurate Information"
    },
    {
        "source": "Customer Health",
        "target": "Customer Relationships"
    },
    {
        "source": "Customer Health",
        "target": "3rd Party Enrichment"
    },
    {
        "source": "M&A Management",
        "target": "Customer Relationships"
    },
    {
        "source": "M&A Management",
        "target": "3rd Party Enrichment"
    },
    {
        "source": "M&A Management",
        "target": "Data Governance"
    },
    {
        "source": "Streamlined Collections",
        "target": "Unique Customer Profile"
    },
    {
        "source": "Streamlined Collections",
        "target": "Accurate Information"
    },
    {
        "source": "Financial & Compliance Rpt.",
        "target": "Accurate Information"
    },
    {
        "source": "Financial & Compliance Rpt.",
        "target": "Customer Relationships"
    },
    {
        "source": "Financial & Compliance Rpt.",
        "target": "3rd Party Enrichment"
    },
    {
        "source": "Regulatory Compliance",
        "target": "Technology Framework"
    },
    {
        "source": "Risk Assessment",
        "target": "Customer Relationships"
    },
    {
        "source": "Risk Assessment",
        "target": "3rd Party Enrichment"
    },
    {
        "source": "Risk Assessment",
        "target": "Data Governance"
    },
    {
        "source": "Tax Calculation",
        "target": "Accurate Information"
    },
    {
        "source": "Tax Calculation",
        "target": "Customer Relationships"
    },
    {
        "source": "Tax Calculation",
        "target": "3rd Party Enrichment"
    },
    {
        "source": "Tax Calculation",
        "target": "Data Governance"
    },
    {
        "source": "Avoidance of Manual Work",
        "target": "Unique Customer Profile"
    },
    {
        "source": "Avoidance of Manual Work",
        "target": "Accurate Information"
    },
    {
        "source": "Avoidance of Manual Work",
        "target": "Data Governance"
    },
    {
        "source": "Avoidance of Manual Work",
        "target": "Technology Framework"
    },
    {
        "source": "Audit Transparency",
        "target": "Data Governance"
    },
    {
        "source": "Audit Transparency",
        "target": "Technology Framework"
    },
    {
        "source": "Unique Customer Profile",
        "target": "Search before Create"
    },
    {
        "source": "Unique Customer Profile",
        "target": "Identity Attribute Mgt."
    },
    {
        "source": "Unique Customer Profile",
        "target": "Core Attribute Mgt."
    },
    {
        "source": "Unique Customer Profile",
        "target": "Match & Merge"
    },
    {
        "source": "Unique Customer Profile",
        "target": "Trust & Survivorship"
    },
    {
        "source": "Unique Customer Profile",
        "target": "External Match"
    },
    {
        "source": "Unique Customer Profile",
        "target": "MDMID Cross Reference"
    },
    {
        "source": "Accurate Information",
        "target": "Synonym Replacement"
    },
    {
        "source": "Accurate Information",
        "target": "Validation Rules"
    },
    {
        "source": "Accurate Information",
        "target": "Business Verification"
    },
    {
        "source": "Accurate Information",
        "target": "Address Validation"
    },
    {
        "source": "Customer Relationships",
        "target": "Hierarchy Modeling"
    },
    {
        "source": "Customer Relationships",
        "target": "Related Entities"
    },
    {
        "source": "Customer Relationships",
        "target": "Product Master Relationship"
    },
    {
        "source": "Customer Relationships",
        "target": "Contact Master Relationship"
    },
    {
        "source": "3rd Party Enrichment",
        "target": "Firmographic Data"
    },
    {
        "source": "3rd Party Enrichment",
        "target": "Technographic Data"
    },
    {
        "source": "3rd Party Enrichment",
        "target": "Financial Data"
    },
    {
        "source": "3rd Party Enrichment",
        "target": "Activity/Intent Data"
    },
    {
        "source": "Data Governance",
        "target": "Data Stewardship"
    },
    {
        "source": "Data Governance",
        "target": "Metadata Management"
    },
    {
        "source": "Data Governance",
        "target": "Data Lineage & Impact"
    },
    {
        "source": "Data Governance",
        "target": "Policies & Procedures"
    },
    {
        "source": "Data Governance",
        "target": "Data Privacy & Security"
    },
    {
        "source": "Technology Framework",
        "target": "Data Tokenization"
    },
    {
        "source": "Technology Framework",
        "target": "Ingress/Egress Patterns"
    },
    {
        "source": "Technology Framework",
        "target": "API Management/Perf"
    },
    {
        "source": "Technology Framework",
        "target": "Workflows"
    },
    {
        "source": "Technology Framework",
        "target": "Audit/Exception Reporting"
    },
    {
        "source": "Technology Framework",
        "target": "AI/ML Support"
    },
    {
        "source": "Technology Framework",
        "target": "History Tracking"
    },
    {
        "source": "Technology Framework",
        "target": "Observability"
    }
]
};

console.log(data)