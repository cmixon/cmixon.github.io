let sum = {
"inv3":"an inversion in the long arm of chromsome 3 or t(3;3) translocation (1R1G2F, xxx%, normal < 3.1%),  ", 
"chr5":"deletion in the long arm of chromosome 5 (del 5q31, 1R2G2A, xxx%, normal < 5.7%, del 5q33, 2R1G2A, xxx%, normal < 5.7%, del 5q31-q33, 1R1G2A, xxx%, normal < 3.8%), ",
"mono5":"monosomy 5 (1R1G1A, xxx%, normal < 5.1%), ", 
"tr69":"a t(6;9) translocation (1R1G2F, xxx%, normal < 1.5%), ",
"chr7":"a deletion in the long arm of chromosome 7 (del 7q22, 1R2G2A, xxx%, normal < 4.4%, del 7q31, 2R1G2A, normal < 4.4%, del 7q22-q31, 1R1G2A, xxx%, normal < 4.4%), ",
"mono7":"monosomy 7 (1R1G1A, xxx%, normal < 3.1%), ",
"chr8":"trisomy 8 (3A, xxx%, normal < XXX%) corroborated by the concurrent RUNX1T1 probe, ",
"RUNX1not21":"RUNX1T1/8q duplication or a RUNX1T1 translocation, but not to RUNX1 on 21q22, 3R, xxx%, normal < 10.0%), ",
"chr11":"rearrangement of the KMT2A locus on chromosome 11 (1R1G1F, xxx%, normal < 3.8%), ",
"chr11del":"deletion of the KMT2A locus on chromosome 11 (1F, xxx%, normal < 3.1%), ",
"chr11gain":"gain of the KMT2A locus on chromsome 11 without rearrangement (3F, xxx%, normal < %) and suggestive of trisomy 11, ",
"ETV6":"ETV6 rearrangement on chromosome 12p (1R1G1F, xxx%, normal <3.8%), ",
"ETV6del": "ETV6 deletion on chromsome 12p (1F, xxx%, normal <6.3%), ",
"TP53":"TP53 gene deletion/17p deletion (1R2G, xxx%, normal <7.4%),  ",
"inv16":"rearrangement of CBFB indicative of inv(16) or t(16;16), 1R1G1F, xxx%, normal <5.1%), ",
"chr17":"RARA/17q duplication or a RARA translocation, but not to PML on 15q24, 3G, xxx%, normal < 5.0%), ",
"chr20":"chromosome 20q deletion (1R2G, xxx%, normal < XXX%, del 20qter, 2R1G, xxx%, normal < XXX%), ",
"mono20":"monosomy 20 (1R1G xxx%, normal < XXX%), ",
"chr21":"chromosome 21 (RUNX1/21q duplication or a RUNX1 translocation, but not to RUNX1T1 on 8q22, 3G, xxx%, normal < 2.3%), ",
"RUNX1":"t(8;21)/RUNX1-RUNX1T1 fusion (1R1G2F, xxx%, normal < 1.5%), ",
"RARA":"t(15;17)/PML-RARA fusion (1R1G2F, xxx%, normal < 1.5%), ",
"atypical": "an atypical pattern with the XYZ probe set( , not seen in validation studies), "
}

let ntp = {
    "inv3":"Inv(3) and t(3;3) are recurrent abnormalities in AML and are associated with poor prognosis in both MDS and AML. ",
    "chr5":"Deletion of 5q (5q-) has been reported in MDS and AML. In AML with 5q, the prognosis is generally unfavorable, associated with rapid disease progression and poor outcome and survival, especially when it is seen as a part of complex karyotype. While the de novo '5q- syndrome' with isolated 5q- is recognized as a specific type of MDS in WHO classification and is associated with a favorable prognosis, the prognosis is less favorable when 5q- is found with other chromosome alterations in a complex karyotype (3 or more abnormalities). The current World Health Organization criteria for 'MDS with isolated del(5q)' allows the presence of one additional chromosomal abnormality other than -7 or deletion 7q. ",
    "mono5":"Monosomy 5 is seen in MDS and AML and in AML is associated with rapid disease progression and poor outcome and survival. ",
    "tr69":"In the current WHO classification, the t(6;9) translocation is presumptive evidence for myelodysplasia in the setting of persistent cytopenia of undetermined origin but without morphologic evidence of myelodysplasia and is also a recurrent anomaly in AML.  In the setting of AML, is does not qualify, however, as sufficient for diagnosis of AML with myeolodysplasia-related changes.  It is seen in approximately 0.5% of cytogenetically abnormal cases of AML and has an association with FLT3  ITD mutations.   The leukemic blasts typically mark as myeloid but with CD9 positivity; trilineage dysplasia, Auer rods, and marrow basophilia are common morphologic observations.  The translocation is an unfavorable prognostic sign in the setting of AML. ", 
    "chr7":"Deletion 7q is associated with an unfavorable prognosis in AML.  In MDS, isolated 7q- is in the intermediate  prognostic group. ",
    "mono7":"Monosomy 7 is an unfavorable prognostic sign in both MDS and AML. ",
    "chr8":"Trisomy 8 (+8) is associated with an intermediate prognosis. ",
    "chr11":"KMT2A (MLL) gene rearrangements are associated with an unfavorable prognosis in AML, except for the t(9;11)/MLLT3-MLL rearrangement, which is in the intermediate prognostic group. ",
    "chr11del":"KMT2A (MLL) gene deletion is associated with intermediate risk when present as a sole abnormality. ",
    "chr11gain":"Trisomy 11 is associated with myelodysplastic syndrome or AML.  Most cases of AML with trisomy 11 are de novo, although there may be an antecedent myelodysplastic phase.  A subset of patients will show internal tandem duplication of the KMT2A locus (at 11q23).  In the LeukemiaNet Standardized Reporting System for genetic abnormalities in AML, this karyotype is in the intermediate-II prognostic group, unless there is mutation of KMT2A, in which case it is in the adverse prognostic group. There is also an association with FLT3-ITD mutation as well. Although this anomaly is in the intermediate prognosis group in the IPSS-R MDS Cytogenetics Scoring system, published literature suggests that it is a marker for aggressive disease with rapid progression or leukemic transformation. ", 
    "ETV6":"ETV6 gene rearrangements are associated with a poor prognosis. ", 
    "ETV6del":"ETV6 gene deletion is associated with an intermediate prognosis in AML and good prognosis in MDS when present as a sole abnormality. ", 
    "inv16":"Inv(16) and/or t(16;16) is diagnostic of acute myeloid leukemia (AML), even when less than 20% blasts are identified. Usually there is monocytic and granulocytic differentiation, often with abnormal eosinophilic precursors. Secondary cytogenetic abnormalities occur in about 40% of cases; those with trisomy 22 as a secondary abnormality have been reported to have improved outcome. KIT mutations occur in approximately 30% of cases and are associated with less favorable prognosis and a higher risk of relapse. FLT3 mutations and trisomy 8 are also associated with worse outcome. ",    
    "TP53":"Deletions of TP53 (17p-) are generally associated with a poor prognosis. ", 
    "chr20":"20q-/-20 has been reported in MDS and AML. Isolated 20q- is associated with an intermediate to unfavorable prognosis in AML but a favorable prognosis in MDS. ",
    "complex":"The presence of a complex karyotype (3 or more abnormalities) is associated with a poor prognosis in MDS and AML.  ",
    "RUNX1":"The demonstration of t(8;21)/RUNX1-RUNX1T1 fusion is diagnostic of AML regardless of blast count in the current WHO classification.  This fusion is a favorable prognostic sign, although 30% of cases will show relapse.  A significant proportion of patients will show secondary changes in the karyotype, most of which do not seem to affect prognosis. Most AML cases with this rearrangement fall into the FAB M2 subtype, and Auer rods are usually easily identified in the leukemic blasts.  Many cases show aberrant marking for CD19 and CD56. " ,

    "RARA":"The demonstration of t(15;17)/PML-RARA fusion is diagnostic of acute promyelocytic leukemia (FAB-M3) regardless of blast count in the current WHO classification. "


}
