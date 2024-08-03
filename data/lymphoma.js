let ntp = {
    //insert key:value pairs refrerenced in html file

    //low-grade

    BCL6rearr:
        "BCL6 rearrangements are recurring abnormalities in B-cell non-Hodgkin lymphoma (NHL), including 40 % diffuse large cell lymphomas (DLCL), 5-10% follicular lymphomas,  9% marginal zone B-cell lymphoma (MZBCL) and rarely mantle cell lymphoma and chronic lymphocytic leukemia. Half of all nodular lymphocyte-predominant Hodgkin lymphomas may have BCL6 gene rearrangement.",

    BCL61R1F:
        "The 1R1F signal pattern observed with the BCL6 probe set may be due to rearrangement with deletion of the 3'BCL6 locus or simple deletion without rearrangement.  BCL6 rearrangements are recurring abnormalities in B-cell non-Hodgkin lymphoma (NHL), including 40 % diffuse large cell lymphomas (DLCL), 5-10% follicular lymphomas, 9% marginal zone B-cell lymphoma (MZBCL) and rarely mantle cell lymphoma and chronic lymphocytic leukemia.",
    BCL61G1F:
        "The 1G1F signal pattern observed with the BCL6 probe set may be due to rearrangement with deletion of the 5'BCL6 locus or simple deletion without rearrangement.  BCL6 rearrangements are recurring abnormalities in B-cell non-Hodgkin lymphoma (NHL), including 40 % diffuse large cell lymphomas (DLCL), 5-10% follicular lymphomas, 9% marginal zone B-cell lymphoma (MZBCL) and rarely mantle cell lymphoma and chronic lymphocytic leukemia.",
    BCL6gain:
        "Gain of BCL6 signal pattern may be indicative of gain of chromosome 3/3q.  Total or partial trisomy 3 is observed in diffuse large B-cell lymphomas, follicular lymphomas, marginal zone lymphomas, and other B-cell lymphomas including blastoid variant of mantle cell lymphoma.",

    CCND1:
        "CCND1 / IGH fusion is a nonrandom abnormality observed most characteristically in mantle cell lymphoma.  It is also observed in multiple myeloma.  Gain of 3q is associated with more aggressive disease / poorer prognosis in this setting.",

    CCND12r3g:
        "The gain of signal in the IGH probe indicates presence of an abnormal clone characterized by gain of IGH locus, trisomy 14 or rearrangement of IGH with a gene other than CCND1.  If MYC gene rearrangement is suspected, t(8;14) translocation should be ruled out.",

    BCL2: "IGH/BCL2 translocation is most commonly associated with follicular lymphoma. It is also observed in diffuse large B-cell lymphomas among other lymphoma subtypes.",

    BCL23f: "Gain of chromosome 18/18q is a frequent primary anomaly in small B-cell lymphoma including marginal zone and lymphoplasmacytic lymphoma but may also be seen as a secondary anomaly in other lymphoma subtypes.",  

    BCL22r3g: "The gain of IGH signal in the IGH/BCL2 probe set (2R3G) indicates the presence of an abnormal clone characterized by gain of IGH locus or trisomy 14 or rearrangement of IGH with a gene other than BCL2.  If MYC gene rearrangement is suspected, the t(8;14) translocation should be ruled out.",

    BCL23r2g: "The gain of BCL2 signal in the IGH/BCL2 probe set (3R2G) indicates presence of an abnormal clone characterized by gain of BCL2, trisomy 18/18q, or rearrangement of BCL2 with a gene other than IGH.  BCL2 gene rearrangements involving immunoglobulin heavy or light chain genes are observed in B-cell lymphomas.  Trisomy 18 is observed as a primary abnormality in small B-cell lymphomas including marginal zone lymphoma and lymphoplasmacytic lymphoma.  It is also seen as a secondary anomaly in other lymphoma subtypes.  If clinically indicated, the BCL2 break-apart probe is available for further characterization.",

    MALT2r3g: " The gain of MALT1 signal (seen as 2R3G in the dual fusion probe and 3F in the breakapart probe) is consistent with gain of MALT1 gene or trisomy 18/18q.  Trisomy 18 is observed as a primary abnormality in small B-cell lymphomas including marginal zone lymphoma and lymphoplasmacytic lymphoma.  It is also seen as a secondary anomaly in other lymphoma subtypes.",

    MALT1: "MALT1  rearrangements are observed in marginal zone B-cell lymphoma of mucosa-associated lymphoid tissue (MALT) and are absent in splenic and nodal marginal zone B-cell lymphomas. Twenty to 30% of gastric MALT lymphomas show a t(11;18)API2/MALT1 translocation, which is a clonal marker for resistance to Helicobacter pylori eradication therapy. If clinically indicated, BIRC3(API2)/MALT1 t(11;18) FISH can be performed.",

    MALT13f: "The gain of MALT1 signal (seen as 2R3G in the dual fusion probe and 3F in the breakapart probe) is consistent with gain of MALT1 gene or trisomy 18/18q.  Trisomy 18 is observed as a primary abnormality in small B-cell lymphomas including marginal zone lymphoma and lymphoplasmacytic lymphoma.  It is also seen as a secondary anomaly in other lymphoma subtypes.",

    BCL6IGH3: "BCL6 rearrangements are recurring abnormalities in B-cell non - Hodgkin lymphoma (NHL), including 40% of diffuse large cell lymphoma (DLBCL), 5-10 % of follicular lymphomas,  9% of marginal zone B - cell lymphoma (MZBCL) and rarely mantle cell lymphoma and chronic lymphocytic leukemia. Half of all nodular lymphocyte - predominant Hodgkin lymphomas  have BCL6 gene rearrangement. If the IGH signal pattern (3G) is the result of  MYC / IGH rearrangement, it would  be indicative of a high risk 'DOUBLE HIT-LYMPHOMA'.   If MYC gene rearrangement is suspected, a t(8; 14) translocation should be ruled out.",

    //CLL
    chr17Above20 : "Detection of 17p deletion (17p- or TP53 gene deletion) by FISH (especially if involving at least 20% of cells) is associated with the poorest outcome in CLL and lack of response to standard therapy. In the original Dohner hierarchical classification dataset, patents with this deletion had a time to first treatment of 9 months.",
    chr17Below20 : "Detection of 17p deletion (17p- or TP53 gene deletion) by FISH (especially if involving at least 20% of cells) is an unfavorable prognostic sign.  In the present case, this finding should be interpreted with caution since the percentage of abnormal cells is only marginally above cutoff and less than 20%.  In their review of the Dohner prognostic classification, Van Dyke et al. found that patients with a 17p deletion in less than 20% of interphases had a time to first treatment similar to those patients with a 13q deletion.",
    chr11q : "The 11q deletion (ATM gene deletion) is considered an unfavorable prognostic indicator with survival between that of TP53 gene deletion (17p-) and normal karyotype among CLL patients.  In the original Dohner hierarchical classification dataset, patients with this deletion had a time to first treatment of 13 months and an estimated median survival of  79 months.",
    chr6q : "Deletion of 6q is associated with an intermediate risk in CLL when present as the primary anomaly. Deletion 6q has also been reported in multiple myeloma, lymphoblastic leukemia and other lymphoid neoplasms, including 43% of lymphoplasmacytic lymphoma/Waldenstrom macroglobulinemia cases. It is also frequently seen as a secondary anomaly in more complex karyotypes.",
    chr12primary : "Trisomy 12 is the most common cytogenetic anomaly identified in CLL by banded cytogenetic analysis, accounting for approximately one-third of all cytogenetically abnormal cases.  From interphase FISH studies, the overall frequency of trisomy 12 in CLL is on the order of 15% of cases.  Recent molecular genetic studies have shown that patients with trisomy 12 may have low-risk disease in the absence of certain molecular mutations (especially NOTCH1).  In the original Dohner hierarchical classification, the overall survival of patients with trisomy 12 was similar to those without a FISH abnormality although the time to first treatment was lower at 33 months, compared to 49 months for those without.  If clinically indicated, molecular analysis with the NeoType CLL Prognostic Profile should be considered.",
    chr12NeoTypePending: "Trisomy 12 is the most common cytogenetic anomaly identified in CLL by banded cytogenetic analysis, accounting for approximately one-third of all cytogenetically abnormal cases.  From interphase FISH studies, the overall frequency of trisomy 12 in CLL is on the order of 15% of cases.  Recent molecular genetic studies have shown that patients with trisomy 12 may have low-risk disease in the absence of certain molecular mutations (especially NOTCH1).  In the original Dohner hierarchical classification, the overall survival of patients with trisomy 12 was similar to those without a FISH abnormality although the time to first treatment was lower at 33 months, compared to 49 months for those without.  See the pending NeoType CLL Prognostic Profile for additional information.",
    chr12second: "Trisomy 12 is the most common cytogenetic anomaly identified in CLL by banded cytogenetic analysis, accounting for approximately one-third of all cytogenetically abnormal cases.  From interphase FISH studies, the overall frequency of trisomy 12 in CLL is on the order of 15% of cases.",
    chr13primary : "Deletion of 13q14 is the most common deletion in CLL being reported in 10-20% of cases by conventional cytogenetics and up to 64% of cases by FISH analysis.  Approximately one third of 13q14 deletions are biallelic. Either form of 13q14 deletion, as a sole abnormality, is associated with a favorable prognosis and a median survival longer than CLL patients with a normal karyotype.  In the original Dohner hierarchical classification dataset, patient with this deletion had a time to first treatment of 92 months.",
    chr13second : "Deletion of 13q14 is the most common deletion in CLL being reported in 10-20% of cases by conventional cytogenetics and up to 64% of cases by FISH analysis.  Approximately one third of 13q14 deletions are biallelic.",
    chr13q34 : "The LAMP1 gene probe is used in this assay with DLEU1&2 to detect monosomy 13 in patients with CLL.  Deletion of 13q34 alone without 13q14 deletion is unusual in CLL. Hence this finding is indicative of an abnormal clone but is not otherwise disease specific.",
    chr11CCND1 : "Translocation t(11;14) is a nonrandom abnormality observed most characteristically in mantle cell leukemia/lymphoma.  Deletion of ATM is observed in approximately one-third of cases of mantle cell lymphoma and is without prognostic significance.  Deletion of 6q is a frequent secondary change in mantle cell lymphoma without established prognostic significance.  Deletion of 13q is a frequent secondary change in mantle cell lymphoma and in some studies has been associated with an inferior prognosis but not in others.",
    chrIGH: "Translocations involving IGH are common in some lymphoid malignancies and occur less frequently in CLL. The prognostic value depends on the translocation partner. The possibility of a lymphoid disorder other than CLL cannot be ruled out by this study. If clinically indicated, further analysis with the NHL FISH panel should be considered.",

    //high-grade

    hgBCL2: "BCL2 rearrangements are observed in 90% of follicular lymphomas, 30% of diffuse large cell lymphomas (sometimes with prior follicular type) and rarely in other lymphoproliferative disorders.  This assay is not designed to identify the rearrangement partner.",

    hgBCL23f: "Gain of chromosome 18/18q is a frequent primary anomaly in small B-cell lymphoma including marginal zone and lymphoplasmacytic lymphoma but may also be seen as a secondary anomaly in other lymphoma subtypes.  Please correlate with other clinical and laboratory information.",

    hgMYC: "MYC rearrangements are recurring abnormalities in lymphoid disorders. The most common translocations involving MYC (8q24) are t(8;14)(q24;q32) with immunoglobulin heavy chain gene and less commonly t(2;8)(p12;q24) and t(8;22)(q24;q11) with immunoglobulin light chain genes. MYC rearrangement is characteristic for Burkitt lymphoma but is also observed in the 2017 WHO category 'High- grade B-cell lymphomas, with BCL2 or BCL6 rearrangements'.  MYC rearrangement is also found in 49% of plasmablastic lymphomas, and is rare in diffuse large B-cell lymphoma, NOS, mantle cell lymphoma, and even more rarely  in other low grade B-cell lymphomas.  This assay is not designed to identify the rearrangement partner.",

    hgMYC34f: "Gain of signal with the MYC breakapart probe is consistent with gain of the MYC locus or of chromosome 8/8q but is not indicative of MYC amplification, which is defined as >4 MYC signals in the absence of rearrangement.",

    hgMYCabove4f: "The abnormal signal pattern with the MYC breakapart probe is indicative of MYC amplification. Per 2017 WHO guidelines, B-cell lymphomas with MYC amplification (>4 signals)  may be aggressive, similar to double-hit lymphomas, but should not be included in the category of high-grade B-cell lymphoma with MYC and BCL2 and/or BCL6 rearrangements.",

    hgMYCandBCL2: " MYC gene rearrangement with concurrent BCL2 gene rearrangement is identified. In the appropriate morphologic setting, these results are indicative of the WHO 2017 category 'High grade B-cell lymphoma [HGBL] with rearrangements of MYC and BCL2 (double-hit lymphoma)'.  This assay is not designed to identify the rearrangement partners.",

    hgMYCandBCL6: " MYC gene rearrangement with concurrent BCL6 gene rearrangement is identified. In the appropriate morphologic setting, these results are indicative of the WHO 2017 category 'High grade B-cell lymphoma [HGBL] with rearrangements of MYC and BCL6' (double-hit lymphoma). This assay is not designed to identify the rearrangement partner.  Rarely, t(3;8)(q27; q24) occurs in B - cell lymphomas, which results in a unique 'pseudo-double-hit' BCL6 - MYC fusion.  While these lymphomas exhibit aggressive clinicopathologic features, in a small case series all patients achieved complete remission after intensive induction regimens.  Hence, the prognosis may be different than for  double / triple hit lymphomas.  Conventional karyotyping as well as metaphase FISH studies may help to distinguish these categories.  Alternatively, if FISH for t(8;14) is positive, then that confirms the diagnosis of double hit lymphoma.  However, a negative result for t(8;14) does not exclude double / triple hit lymphoma, since MYC may also rearrange with kappa or lambda light chain genes. Next generation sequencing for fusions may also be helpful for further evaluation, if clinically indicated.  Please correlate with other clinical and laboratoryc findings.",

    hgMYCandBCL6andBCL2: " MYC gene rearrangement with concurrent BCL2 and BCL6 gene rearrangements is identified. In the appropriate morphologic setting, these results are indicative  of the WHO 2017 category 'High grade B-cell lymphoma [HGBL] with rearrangements of MYC, BCL2 and BCL6' (triple - hit lymphoma).  This assay is not designed to identify the rearrangement partner. Rarely, t(3;8)(q27;q24) occurs in B - cell lymphomas, which results in a unique 'pseudo-double-hit' BCL6 - MYC fusion.  While these lymphomas exhibit aggressive clinicopathologic features, in a small case series all patients achieved complete remission after intensive induction regimens.  Hence, the prognosis may be different than for  double / triple hit lymphomas.  Conventional karyotyping as well as metaphase FISH studies may help to distinguish these categories.  Alternatively, if FISH for t(8;14) is positive, then that confirms the diagnosis of triple hit lymphoma.  However, a negative result for t(8;14) does not exclude double / triple hit lymphoma, since MYC may also rearrange with kappa or lambda light chain genes. Next generation sequencing for fusions may also be helpful for further evaluation, if clinically indicated.  Please correlate with other clinical and laboratory findings.",

    possTetraploidy: "The signal gains raise the possibility of a near-tetraploid karyotype, which may be observed in various lymphoma subtypes, including blastoid variant of mantle cell lymphoma.  If clinically indicated, targeted analysis with the t(11;14);CCND1/IGH probe set should be considered.",

    noTargeted:  "No targeted rearrangements are identified.",

    possDHL: "Although no MYC rearrangement is identified by the MYC breakapart probe, the published false negative rate for this probe is approximately 4%. Hence, if a double hit lymphoma is within the morphologic differential diagnosis, further assessment for MYC rearrangement with the IGH/MYC dual fusion probe set should be considered."

};

let references = {

    //low-grade
    BCL6rearr: ["Huret", "Dierlamm", "Wlodarska"],
    BCL61G1F: "",
    BCL61G1F: "",
    BCL6gain: ["Huang", "Kertowidjojo", "Cuneo"],
    CCND1: ["Sarkar"],
    BCL2: ["Mohamed"],
    BCL22r3g: ["Mohamed"],
    BCL23r2g: ["VanDyke"],
    MALT2r3g: ["VanDyke"],
    MALT1: ["Baens", "Liu"],
    BCL6IGH3: ["Huret", "Dierlamm", "Wlodarska"],

    //CLL
    chr17Above20: ["Dohner"], 
    chr17Below20: ["VanDyke2"], 
    chr11q: ["Dohner"], 
    chr6q: ["Naderi"], 
    chr12primary: ["Autore"], 
    chr13primary:["Dohner"],
    chr13second: ["Dewald"],
    chr11CCND1: ["Salaverria"], 
    chrIGH: ["deBraekeleer"],

    //high-grade

    hgMYC: ["Nguyen"],
    hgMYCandBCL2: ["Swerdlow"],
    hgMYCandBCL6: ["Johnson"],
    hgMYCandBCL6andBCL2: ["Johnson"],
    possDHL: ["King"],


    //create blank key if there are no references for the comment
    indeterminate: "",
    marginal: "",
    chr12second: "",
    BCL23f: "",
    hgMYC34f:"",
    hgMYCabove4f: "",
    noTargeted: "",
    possTetraploidy: "",
};

let reference_list = {

    //list all references

    Huret: "Huret, JL.BCL6(B - Cell Lymphoma 6).Atlas Genet Cytogenet Oncol Haematol. 2013; 17(6): 371- 379.<br>",
    Dierlamm: "Dierlamm J, et al.BCL6 gene rearrangements also occur in marginal zone B - cell lymphoma.Br J Haematol. 1997 Sep; 98(3): 719 - 25.<br>",
    Wlodarska: "Wlodarska, I.et al.Frequent occurrence of BCL6 rearrangements in nodular lymphocyte predominance Hodgkin lymphoma but not in classical Hodgkin lymphoma. 2003, Blood, 101(2): 706 - 710.<br>",

    Huang: "Huang, S.et al.Prognostic impact of diffuse large B - cell lymphoma with extra copies of MYC, BCL2 and / or BCL6: comparison with double / triple hit lymphoma and double expressor lymphoma.Diagn Pathol 14, 81(2019).<br>",
    Kertowidjojo: "Kertowidjojo E, et al.Copy number aberrations in B - cell lymphoma: A call for consideration in prognosis determination and therapy.Leuk Res Rep. 2019; 11: 38 - 40.<br>",
    Cuneo: "Cuneo, A; Castoldi, GL.  + 3 or trisomy 3 in non Hodgkin's lymphoma (NHL).  Atlas Genet Cytogenet Oncol Haematol. 2001;5(1):44-45.<br>",

    Sarkar: "Sarkar, S.et al.CCND1(B - cell leukemia / lymphoma 1).Atlas Genet Cytogenet Oncol Haematol. 2016; 20(3): 130 - 154.<br>",

    Mohamed: "Mohamed, AN. BCL2(B - Cell Leukemia / Lymphoma 2).Atlas Genet Cytogenet Oncol Haematol. 2018; 22(9): 362 - 368.<br>",

    VanDyke: "Van Dyke, DL + 18 or trisomy 18 in lymphoproliferative disorders.Atlas Genet Cytogenet Oncol Haematol. 2003; 7(4): 277 - 279. http://AtlasGeneticsOncology.org/Anomalies/Tri18ID2030.html <br>",
    VanDyke2: "Van Dyke DL, Werner L, Rassenti LZ, et al. The Dohner fluorescence in situ hybridization prognostic classification of chronic lymphocytic leukaemia (CLL): the CLL Research Consortium experience. Br J Haematol. 2016;173(1):105-13. PMID: 26848054.<br>",

    Baens: " Baens, M; Marynen, P.MALT1(mucosa associated lymphoid tissue lymphoma translocation gene 1).Atlas Genet Cytogenet Oncol Haematol. 2002; 6(1): 10 - 12.<br>",
    Liu: "Liu H, et al.Resistance of t(11; 18) positive gastric mucosa - associated lymphoid tissue lymphoma to Helicobacter pylori eradication therapy.Lancet. 2001 Jan 6; 357(9249): 39 - 40.<br>",

    Dohner: "Dohner H et al. Genomic Aberrations and Survival in Chronic Lymphocytic Leukemia. NEJM 2000; 343:1910-1916.<br>",
    Naderi: " Naderi N and Yang DT. Lymphoplasmacytic Lymphoma and Waldenstrom Macroglobulinemia. Arch Pathol Lab Med. 2013;137:580 - 585.<br>",
    Autore: "Autore F et al. Morphological, immunophenotypic, and genetic features of chronic lymphocytic leukemia with trisomy 12: a comprehensive review. Haematologica 2018; 103:931-938.<br>",
    Dewald: "Dewald GW et al.  Chromosome anomalies detected by interphase fluorescence in situ hybridization: correlation with significant biological features of B-cell chronic lymphocytic leukaemia.  Br J Haemat 2003; 121:287-295<br>",
    Salaverria: "Salaverria I et al.  Specific Secondary Genetic Alterations in Mantle Cell Lymphoma Provide Prognostic Information Independent of the Gene Expression-Based Proliferation Signature.  J Clin Oncol 2007; 25:1216-1222.<br>",
    deBraekeleer: "deBraekeleer M et al.  Immunoglobulin gene translocations in CLL:  A report of 35 patients and review of the literature.  Mol Clin Oncol 2016:4:682-694.<br>",

    Nguyen: "Nguyen L, et al. The Role of c-MYC in B-Cell Lymphomas: Diagnostic and Molecular Aspects. Genes (Basel). 2017;8(4):116.<br>",
    Swerdlow: "Swerdlow SH et al (Eds): WHO Classifications of Tumors. Pathology and Genetics of Tumors of Hematopoietic and lymphoid Tissues. IARC: Lyon 2017.<br>",
    Johnson:  "Johnson SM, Umakanthan JM, Yuan J, et al. Lymphomas with pseudo-double-hit BCL6-MYC translocations due to t(3;8)(q27;q24) are associated with a germinal center immunophenotype, extranodal involvement, and frequent BCL2 translocations. Hum Pathol. 2018;80:192-200. PMID: 29902576.<br>",
    King: "King, R. L. et al. False-negative rates for MYC fluorescence in situ hybridization probes in B-cell neoplasms. Haematologica 104, e248-e251 (2019).<br>",
};


//do not change anything below this line

let reference_array = []; //to hold all reference keys
let ref_unique_array = []; //only unique reference keys

function detectedAbnormality(ntpKey, reference) {
    $("<span>" + ntpKey + "<br>" + "<br>" + "</span>").appendTo("#allntp");
    //write the same reference only once
    for (let el of reference) {
        reference_array.push(el);
    }
    ref_unique_array = [...new Set(reference_array)];
    let final_list = []; //to hold all unique reference values; local variable required else list will grow with each write
    for (let el of ref_unique_array) {
        final_list.push(reference_list[el]);
    }
    final_list_string = final_list.toString().replace(/<br>,/g, "<br>"); //regex to stop printing of comma before references
    document.querySelector("#references").innerHTML = final_list_string;
}

function copyToClipboard() {
    var copyText =
        document.getElementById("reportText").innerText +
        document.getElementById("allReferences").innerText;
    navigator.clipboard.writeText(copyText);
    console.log("Text copied");
}

function copyInterpToClipboard() {
    var copyText = document.querySelector("#reportText").innerText;
    navigator.clipboard.writeText(copyText);
}

function copyRefsToClipboard() {
    var copyText = document.querySelector("#references").innerText;
    navigator.clipboard.writeText(copyText);
}
