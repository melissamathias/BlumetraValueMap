import pandas as pd
from openpyxl import Workbook, load_workbook
import os

nodes = [
    "Top Line (Growth)",
    "Bottomline (Optimization)",
    "Customer Experience",
    "Compliance & Risk",
]




nodes1 = [    
    "Prospect Marketing",
    "Competitive Analysis",
    "Customer Marketing",
    "White Space Analysis",
    "Marketing Effectiveness",
    "Search Before Create",
    "Omni-Channel Integration",
    "Customer Segmentation",
    "Web Registration",
    "Pricing Optimization",
    "Forecasting/Quota Alignment",
    "Lead Account Match",
    "Net New Logo",
    "Sales Territory Management",
    "Account Management",
    "Sales Incentive Comp",
    "Organization 360",
    "Enterprise Analytics",
    "Self Service Analytics",
    "Customer Health",
    "M&A Management",
    "Streamlined Collections",
    "Financial & Compliance Rpt.",
    "Regulatory Compliance",
    "Risk Assessment",
    "Tax Calculation",
    "Avoidance of Manual Work",
    "Audit Transparency",]




nodes2 = [
    "Unique Customer Profile",
    "Accurate Information",
    "Customer Relationships",
    "3rd Party Enrichment",
    "Data Governance",
    "Technology Framework",
]




nodes3 = [
    "Identity Attribute Mgt.",
    "Core Attribute Mgt.",
    "Search before Create",
    "Match & Merge",
    "Trust & Survivorship",
    "External Match",
    "MDMID Cross Reference",
    "Synonym Replacement",
    "Validation Rules",
    "Business Verification",
    "Address Validation",
    "Hierarchy Modeling",
    "Related Entities",
    "Product Master Relationship",
    "Contact Master Relationship",
    "Firmographic Data",
    "Technographic Data",
    "Financial Data",
    "Activity/Intent Data",
    "Data Stewardship",
    "Metadata Management",
    "Data Lineage & Impact",
    "Policies & Procedures",
    "Data Privacy & Security",
    "Data Tokenization",
    "Ingress/Egress Patterns",
    "API Management/Perf",
    "Workflows",
    "Audit/Exception Reporting",
    "AI/ML Support",
    "History Tracking",
    "Observability"
]



links = [
    ("Top Line (Growth)", "Prospect Marketing"),
    ("Top Line (Growth)", "Competitive Analysis"),
    ("Top Line (Growth)", "Customer Marketing"),
    ("Top Line (Growth)", "White Space Analysis"),
    ("Top Line (Growth)", "Marketing Effectiveness"),
    ("Top Line (Growth)", "Search Before Create"),
    ("Top Line (Growth)", "Omni-Channel Integration"),
    ("Top Line (Growth)", "Customer Segmentation"),
    ("Top Line (Growth)", "Pricing Optimization"),
    ("Top Line (Growth)", "Forecasting/Quota Alignment"),
    ("Top Line (Growth)", "Lead Account Match"),
    ("Top Line (Growth)", "Net New Logo"),
    ("Top Line (Growth)", "Sales Territory Management"),
    ("Top Line (Growth)", "Organization 360"),
    ("Top Line (Growth)", "Enterprise Analytics"),
    ("Bottomline (Optimization)", "Marketing Effectiveness"),
    ("Bottomline (Optimization)", "Search Before Create"),
    ("Bottomline (Optimization)", "Omni-Channel Integration"),
    ("Bottomline (Optimization)", "Pricing Optimization"),
    ("Bottomline (Optimization)", "Account Management"),
    ("Bottomline (Optimization)", "Sales Incentive Comp"),
    ("Bottomline (Optimization)", "Organization 360"),
    ("Bottomline (Optimization)", "Enterprise Analytics"),
    ("Bottomline (Optimization)", "Self Service Analytics"),
    ("Bottomline (Optimization)", "Customer Health"),
    ("Bottomline (Optimization)", "M&A Management"),
    ("Bottomline (Optimization)", "Streamlined Collections"),
    ("Bottomline (Optimization)", "Risk Assessment"),
    ("Bottomline (Optimization)", "Avoidance of Manual Work"),
    ("Customer Experience", "Web Registration"),
    ("Customer Experience", "Customer Health"),
    ("Customer Experience", "Tax Calculation"),
    ("Compliance & Risk", "Web Registration"),
    ("Compliance & Risk", "Sales Incentive Comp"),
    ("Compliance & Risk", "Organization 360"),
    ("Compliance & Risk", "Customer Health"),
    ("Compliance & Risk", "Financial & Compliance Rpt."),
    ("Compliance & Risk", "Regulatory Compliance"),
    ("Compliance & Risk", "Risk Assessment"),
    ("Compliance & Risk", "Avoidance of Manual Work"),
    ("Compliance & Risk", "Audit Transparency"),
    ("Unique Customer Profile", "Prospect Marketing"),
    ("Unique Customer Profile", "Customer Marketing"),
    ("Unique Customer Profile", "Marketing Effectiveness"),
    ("Unique Customer Profile", "Search before Create"),
    ("Unique Customer Profile", "Omni-Channel Integration"),
    ("Unique Customer Profile", "Web Registration"),
    ("Unique Customer Profile", "Forecasting/Quota Alignment"),
    ("Unique Customer Profile", "Net New Logo"),
    ("Unique Customer Profile", "Sales Territory Management"),
    ("Unique Customer Profile", "Account Management"),
    ("Unique Customer Profile", "Sales Incentive Comp"),
    ("Unique Customer Profile", "Organization 360"),
    ("Unique Customer Profile", "Enterprise Analytics"),
    ("Unique Customer Profile", "Self Service Analytics"),
    ("Unique Customer Profile", "Customer Health"),
    ("Unique Customer Profile", "Streamlined Collections"),
    ("Unique Customer Profile", "Avoidance of Manual Work"),
    ("Unique Customer Profile", "Identity Attribute Mgt."),
    ("Unique Customer Profile", "Core Attribute Mgt."),
    ("Unique Customer Profile", "Search Before Create"),
    ("Unique Customer Profile", "Match & Merge"),
    ("Unique Customer Profile", "Trust & Survivorship"),
    ("Unique Customer Profile", "External Match"),
    ("Unique Customer Profile", "MDMID Cross Reference"),
    ("Accurate Information", "Prospect Marketing"),
    ("Accurate Information", "Competitive Analysis"),
    ("Accurate Information", "Customer Marketing"),
    ("Accurate Information", "Marketing Effectiveness"),
    ("Accurate Information", "Search Before Create"),
    ("Accurate Information", "Customer Segmentation"),
    ("Accurate Information", "Pricing Optimization"),
    ("Accurate Information", "Lead Account Match"),
    ("Accurate Information", "Sales Territory Management"),
    ("Accurate Information", "Organization 360"),
    ("Accurate Information", "Enterprise Analytics"),
    ("Accurate Information", "Self Service Analytics"),
    ("Accurate Information", "Customer Health"),
    ("Accurate Information", "Streamlined Collections"),
    ("Accurate Information", "Financial & Compliance Rpt."),
    ("Accurate Information", "Tax Calculation"),
    ("Accurate Information", "Avoidance of Manual Work"),
    ("Accurate Information", "Synonym Replacement"),
    ("Accurate Information", "Validation Rules"),
    ("Accurate Information", "Business Verification"),
    ("Accurate Information", "Address Validation"),
    ("Customer Relationships", "Prospect Marketing"),
    ("Customer Relationships", "Competitive Analysis"),
    ("Customer Relationships", "Customer Marketing"),
    ("Customer Relationships", "Search Before Create"),
    ("Customer Relationships", "Customer Segmentation"),
    ("Customer Relationships", "Pricing Optimization"),
    ("Customer Relationships", "Lead Account Match"),
    # ("Customer Relationships", "Account Management"),
    # ("Customer Relationships", "Sales Incentive Comp"),
    # ("Customer Relationships", "Organization 360"),
    # ("Customer Relationships", "Enterprise Analytics"),
    # ("Customer Relationships", "Customer Health"),
    # ("Customer Relationships", "M&A Management"),
    # ("Customer Relationships", "Financial & Compliance Rpt."),
    ("Customer Relationships", "Sales Territory Management"),
    ("Customer Relationships", "Account Management"),
    ("Customer Relationships", "Sales Incentive Comp"),
    ("Customer Relationships", "Organization 360"),
    ("Customer Relationships", "Enterprise Analytics"),
    ("Customer Relationships", "Customer Health"),
    ("Customer Relationships", "M&A Management"),
    ("Customer Relationships", "Financial & Compliance Rpt."),
    ("Customer Relationships", "Risk Assessment"),
    ("Customer Relationships", "Tax Calculation"),
    ("Customer Relationships", "Hierarchy Modeling"),
    ("Customer Relationships", "Related Entities"),
    ("Customer Relationships", "Product Master Relationship"),
    ("Customer Relationships", "Contact Master Relationship"),
    ("3rd Party Enrichment", "Prospect Marketing"),
    ("3rd Party Enrichment", "Competitive Analysis"),
    ("3rd Party Enrichment", "Customer Marketing"),
    ("3rd Party Enrichment", "White Space Analysis"),
    ("3rd Party Enrichment", "Marketing Effectiveness"),
    ("3rd Party Enrichment", "Omni-Channel Integration"),
    ("3rd Party Enrichment", "Customer Segmentation"),
    ("3rd Party Enrichment", "Sales Territory Management"),
    ("3rd Party Enrichment", "Account Management"),
    ("3rd Party Enrichment", "Sales Incentive Comp"),
    ("3rd Party Enrichment", "Organization 360"),
    ("3rd Party Enrichment", "Enterprise Analytics"),
    ("3rd Party Enrichment", "Customer Health"),
    ("3rd Party Enrichment", "M&A Management"),
    ("3rd Party Enrichment", "Financial & Compliance Rpt."),
    ("3rd Party Enrichment", "Risk Assessment"),
    ("3rd Party Enrichment", "Tax Calculation"),
    ("3rd Party Enrichment", "Firmographic Data"),
    ("3rd Party Enrichment", "Technographic Data"),
    ("3rd Party Enrichment", "Financial Data"),
    ("3rd Party Enrichment", "Activity/Intent Data"),
    ("Data Governance", "Organization 360"),
    ("Data Governance", "Enterprise Analytics"),
    ("Data Governance", "Self Service Analytics"),
    ("Data Governance", "M&A Management"),
    ("Data Governance", "Risk Assessment"),
    ("Data Governance", "Tax Calculation"),
    ("Data Governance", "Avoidance of Manual Work"),
    ("Data Governance", "Audit Transparency"),
    ("Data Governance", "Data Stewardship"),
    ("Data Governance", "Metadata Management"),
    ("Data Governance", "Data Lineage & Impact"),
    ("Data Governance", "Policies & Procedures"),
    ("Data Governance", "Data Privacy & Security"),
    ("Technology Framework", "Web Registration"),
    ("Technology Framework", "Regulatory Compliance"),
    ("Technology Framework", "Avoidance of Manual Work"),
    ("Technology Framework", "Audit Transparency"),
    ("Technology Framework", "Data Tokenization"),
    ("Technology Framework", "Ingress/Egress Patterns"),
    ("Technology Framework", "API Management/Perf"),
    ("Technology Framework", "Workflows"),
    ("Technology Framework", "Audit/Exception Reporting"),
    ("Technology Framework", "AI/ML Support"),
    ("Technology Framework", "History Tracking"),
    ("Technology Framework", "Observability")
]


spreadsheet = []
spreadsheet2 = []
spreadsheet3 = []
spreadsheetBus = []
spreadsheetUse = []
spreadsheetCap = []
spreadsheetFeat = []

example = "https://www.google.com/"

for i in nodes:
    spreadsheetBus.append(i)

for i in nodes1:
    spreadsheetUse.append((i,example + i))
    
for i in nodes2:
    spreadsheetCap.append(i)

for i in nodes3:
    spreadsheetFeat.append((i,example + i))
    



for lvl0_name in nodes:
    for link in links:
        if link[0] == lvl0_name:
            lvl1_name = link[1]
            spreadsheet.append((lvl0_name, lvl1_name))
            
for lvl1_name in nodes1:
                for link in links:
                    if link[1] == lvl1_name:
                        lvl2_name = link[0]
                        if lvl2_name in nodes2:            
                            spreadsheet2.append((lvl1_name, lvl2_name))
                            
                            
for lvl2_name in nodes2:
    for link in links:
        if link[0] == lvl2_name:
            lvl3_name = link[1]
            if lvl3_name in nodes3:
                spreadsheet3.append((lvl2_name, lvl3_name))
                            




df = pd.DataFrame(spreadsheet, columns=['0', '1'])
df1 = pd.DataFrame(spreadsheet2, columns=['1', '2'])
df2 = pd.DataFrame(spreadsheet3, columns=['2', '3'])
dfBus = pd.DataFrame(spreadsheetBus, columns=['0'])
dfUse = pd.DataFrame(spreadsheetUse, columns=['1','Links'])
dfCap = pd.DataFrame(spreadsheetCap, columns=['2'])
dfFeat = pd.DataFrame(spreadsheetFeat, columns=['3','Links'])

dfNodes = pd.DataFrame({
    '0': pd.Series(nodes),
    '1': pd.Series(nodes1),
    '2': pd.Series(nodes2),
    '3': pd.Series(nodes3)
})

print(dfNodes)

file_path = '/Users/krishiv/BlumetraValueMap/Finished/relationship_chart_spreadsheet_final.xlsx'

# Use Pandas Excel writer to add multiple sheets
with pd.ExcelWriter(file_path, engine='openpyxl') as writer:
    dfNodes.to_excel(writer, index=False, sheet_name = 'All Nodes')
    dfBus.to_excel(writer, index=False, sheet_name = 'Business Value Nodes')
    dfUse.to_excel(writer, index=False, sheet_name = 'Use Cases Nodes')
    dfCap.to_excel(writer, index=False, sheet_name = 'Capabilities Nodes')
    dfFeat.to_excel(writer, index=False, sheet_name = 'Features Nodes')
    df.to_excel(writer, index=False, sheet_name = 'lvl0 to lvl1')
    df1.to_excel(writer, index=False, sheet_name = 'lvl1 to lvl2')
    df2.to_excel(writer, index=False, sheet_name = 'lvl2 to lvl3')


# print( "nodes 2" + nodes2)










                            
            #spreadsheet.append((lvl0_name, lvl1_name,))
            # for link2 in links:
            #     if link2[0] == lvl1_name:
            #         lvl2_name = link2[1]
            #         print("    Processing Level 2:", lvl2_name)
            #         for link3 in links:
            #             if link3[0] == lvl2_name:
            #                 lvl3_name = link3[1]
            #                 print("      Processing Level 3:", lvl3_name)
            #                 spreadsheet.append((lvl0_name, lvl1_name, lvl2_name, lvl3_name))

# print(spreadsheet)



# df = pd.DataFrame(spreadsheet, columns=['Level 0', 'Level 1'])
# excel_file = '/Users/krishiv/Test/relationship_chart_spreadsheet.xlsx'
# df.to_excel(excel_file, index=False, sheet_name = 'lvl0 to lvl1')

# print(f"Spreadsheet '{excel_file}' has been created.")



# for lvl1_name in nodes1:
#     for link in links:
#         if link[1] == lvl1_name:
#             lvl2_name = link[0]
#             if lvl2_name in nodes2:
#                 spreadsheet.append((lvl1_name, lvl2_name))




# for lvl2_node in nodes2:
#     lvl2_name = lvl2_node["name"]
#     for link in links:
#         if link[0] == lvl2_name:
#             if link[1] in nodes1:
#                 lvl1_name = link[1]
#                 spreadsheet2.append((lvl1_name, lvl2_name,))