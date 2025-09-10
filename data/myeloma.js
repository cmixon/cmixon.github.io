let ntp = {
  hyperdiploid:
        "The results with the 5/9/15 probe set are consistent with hyperdiploidy, a standard risk prognostic sign in multiple myeloma, which may be modified during the course of disease by the acquisition of high-risk abnormalities.",   
    
    hyperdiploidHr:
    "The results with the 5/9/15 probe set are consistent with hyperdiploidy. Hyperdiploidy per se does not ameliorate the prognostic impact of the high-risk anomalies present in this case, but the presence of trisomy 5 specifically has been associated with clinical amelioration of high-risk abnormalities.",

  tetraploid:
        "The gain in chromosome counts is indicative of near-tetraploidy, an unfavorable risk group in multiple myeloma independent of the presence of additional high-risk abnormalities.",

  possibleTetraploid:
      "The signal gains in the probe sets are concerning for near-tetraploidy, an unfavorable risk group.  If clinically indicated, further evaluation of ploidy status with the 5/9/15 probe set should be considered.",

  indeterminate:
    "These results are consistent with an elevated ploidy level but do not distinguish between hyperdiploidy (standard risk) and near-tetraploidy (unfavorable). ",

  del13q:
    "Loss of material from the long arm of chromosome 13 is considered standard risk in plasma cell myeloma; there is some evidence that this deletion may confer an overall protective effect in the presence of high-risk abnormalities. When detected by karyotyping, it predicts impaired progression-free survival and overall survival.",

  mono13:
    " There is some evidence that monosomy 13/whole-arm deletion of 13q as identified in this case may confer an adverse effect on overall survival while proximal del(13q) may confer a protective effect on overall survival; however, both are considered standard risk in plasma cell myeloma.  When detected by karyotyping, monosomy 13 predicts impaired progression-free survival and overall survival.",

  gain1q:
    "Current high-risk myeloma guidelines are rapidly evolving in light of new therapeutic regimens.  Gain of the long arm of chromosome 1 (1q), a frequent finding in plasma cell neoplasia by interphase FISH analysis, is considered high risk in plasma cell myeloma when present with additional high-risk abnormalities in the current NCCN guidelines, or when present with a 1p deletion or a high-risk IGH rearrangement in the current mSMART 4.0 guidelines. In relapsed multiple myeloma, gain of 1q alone is considered high risk in both NCCN and mSMART 4.0 guidelines.",
  del1p:
    "Current high-risk myeloma guidelines are rapidly evolving in light of new therapeutic regimens.  The deletion in chromosome 1p detected by this probe set is considered high-risk in the current NCCN guidelines but is high-risk in the current mSMART 4.0 guidelines only when bi-allelic (present in both copies of chromosome 1p) or in conjunction with gain of 1q or a high-risk IGH rearrangement.  In relapsed multiple myeloma, loss of 1p alone is considered high risk in both NCCN and mSMART 4.0 guidelines.",

  amp1q:
    "Gain of 1q is a frequent finding in plasma cell neoplasia by interphase FISH analysis.  It is considered high risk in plasma cell myeloma.  Increased copies of 1q (ie >3R) may be associated with a less favorable prognosis.",

  del17p:
    "TP53 gene deletion is observed in about 10% of newly diagnosed plasma cell myeloma and up to 80% in later stages.  It is considered high risk in plasma cell myeloma.  There is increasing evidence that higher percentages of TP53 deletion (ie >55%) show worse progression-free and overall survival.  Molecular testing for TP53 mutations is recommended, if clinically indicated.",

  relTP53:
    "Relative deletion of TP53 in multiple myeloma was associated with the same high-risk prognosis as simple deletion 17p in a recent large study.",

  TP53Tri5:
    "TP53 gene deletion is observed in about 10% of newly diagnosed plasma cell myeloma and up to 80% in later stages.  It is considered high risk in plasma cell myeloma.  There is increasing evidence that higher percentages of TP53 deletion (ie >55%) show worse progression-free and overall survival.  Molecular testing for TP53 mutations is recommended, if clinically indicated.   There is evidence that the presence of trisomy 5 ameliorates the poor prognosis associated with this deletion somewhat.",

  mono17:
        "Monosomy 17 is a less frequently observed pathway for TP53 gene deletions, compared to deletion of the short arm of chromosome 17 [del(17p)].  TP53 gene deletions are observed in around 10% of newly diagnosed plasma cell myeloma and up to 80% in later stages.  It is considered high risk in plasma cell myeloma.  There is increasing evidence that higher percentages of TP53 deletion (ie >55%) show worse progression-free and overall survival.  Molecular testing for TP53 mutations is recommended, if clinically indicated.",

    lossNF1:
      "Loss of NF1 is consistent with a complex karyotype.  It has no established clinical significance in this setting.",

  ccnd1:
    "IGH::CCND1 rearrangement is considered standard risk in plasma cell myeloma in the NCCN and mSMART 4.0 guidelines.",

  gainCCND1:
    "Gain of chromosome 11 is observed in the group of myeloma cases characterized by hyperdiploidy. However, isolated gain of a single chromosome is insufficient to establish hyperdiploidy.  If clinically indicated, further evaluation of the ploidy status with the 5/9/15 probe set should be considered.  Hyperdiploidy is considered standard risk in plasma cell myeloma.",

    
  gainCCND1pending:
    "Gain of chromosome 11 is observed in the group of myeloma cases characterized by hyperdiploidy. However, isolated gain of a single chromosome is insufficient to establish hyperdiploidy.  At the time of this report, further evaluation of the ploidy status with the 5/9/15 probe set is pending in the Plasma Cell Myeloma panel.",

    ccnd1hr:
    "IGH::CCND1 rearrangement [t(11;14)] is associated with standard risk in plasma cell myeloma.  However, patients with unfavorable risk genetics have the inferior prognosis associated with these anomalies although the higher risk associated with gain of 1q seems to be related to gains above one additional copy.  Clinical trials suggest that multiple myeloma with t(11;14) may respond to BCL2 inhibitors.",

  fgfr3:
    "Current high-risk myeloma guidelines are rapidly evolving in light of new therapeutic regimens. In newly diagnosed multiple myeloma, the IGH::FGFR3 rearrangement  is considered high-risk in current NCCN guidelines, and if present in association with a chromosome 1 abnormality (1p deletion or gain of 1q) in the mSMART 4.0 guidelines. In relapsed multiple myeloma, this IGH rearrangement is considered high-risk in both NCCN and mSMART 4.0 guidelines",

  maf: "Current high-risk myeloma guidelines are rapidly evolving in light of new therapeutic regimens. In newly diagnosed multiple myeloma, the IGH::MAF rearrangement  is considered high-risk in current NCCN guidelines, and if present in association with a chromosome 1 abnormality (1p deletion or gain of 1q) in the mSMART 4.0 guidelines. In relapsed multiple myeloma, this IGH rearrangement is considered high-risk in both NCCN and mSMART 4.0 guidelines",

  mafb: "Current high-risk myeloma guidelines are rapidly evolving in light of new therapeutic regimens. In newly diagnosed multiple myeloma, the IGH::MAFB rearrangement  is considered high-risk in current NCCN guidelines, and if present in association with a chromosome 1 abnormality (1p deletion or gain of 1q) in the mSMART 4.0 guidelines. In relapsed multiple myeloma, this IGH rearrangement is considered high-risk in both NCCN and mSMART 4.0 guidelines",

  mono16:
    "Monosomy 16 is frequently observed in plasma cell myeloma and considered standard risk. ",

  del20q:
    "Deletion of 20q is a recurring abnormality in myeloid neoplasms.  Studies suggest that del(20q) seen in association with plasma cell myeloma is more likely to represent an abnormality in non-plasma cells.  It is considered standard risk in plasma cell myeloma.",

  ighrearr:
        "Current high-risk myeloma guidelines are rapidly evolving in light of new therapeutic regimens.  The signal pattern with the IGH probe sets is consistent with an IGH rearrangement not involving the partner genes in this panel. All IGH translocations not involving chromosomes 4, 16 and 20 are considered standard risk in mSMART 4.0 guidelines. However, in the current NCCN guidelines, MYC rearrangement is also considered high-risk and may involve IGH as well as non-IGH partners.  If clinically indicated, targeted analysis with the MYC breakapart and t(8;14) IGH/MYC dual fusion probe sets should be considered.",
    igh1r1f:
      "No high-risk immunoglobulin gene rearrangement is identified.  Other IGH translocations in plasma cell myeloma, not investigated for in this FISH assay, include t(6;14) and rarely t(7;14), t(8;14), and t(14;18). Hence the possibility of an IGH rearrangement has not been ruled out in this case. Rearrangements of IGH occur in up to 40% of multiple myeloma and plasma cell leukemia cases.  Although MYC translocations are associated with a poorer outcome, all IGH translocations not involving chromosomes 4, 16 and 20 are considered standard risk in plasma cell myeloma.  However, the possibility that the atypical signal pattern observed with the IGH break-apart probe (1R1F or 1G1F) is indicative of a physiological event accompanying somatic V-D-J assembly in B cells and not oncogenic has also not been ruled out.",

  mono14:
    "Monosomy 14 is a frequent monosomy in plasma cell myeloma. It is considered standard risk in plasma cell myeloma. ",

  ighba:
    "An IGH gene rearrangement may be considered high risk in plasma cell myeloma if it is associated with t(4;14), t(14;16), or t(14;20).  The IGH Complex FISH panel will be performed separately unless otherwise requested. Please refer to the reflexed panel results for information regarding the IGH translocation partner.",

  igh5del:
    "The 1R1F signal pattern, with the IGH break apart probe, is indicative of deletion of the 5' region of the IGH locus. Deletions of the IGVH region have been reported to occur as physiological events accompanying somatic V-D-J assembly in B cells and may not be oncogenic.  Rearrangements, including translocations, are sometimes accompanied by deletions at the breakpoints. It is not clear if the deletion, detected by FISH in this case, is accompanied by a translocation. Hence, the possibility of a clinically significant unbalanced rearrangement involving IGH cannot be ruled out.  The prognostic significance of IGH rearrangement depends on the fusion partner. The IGH Complex FISH panel will be performed separately unless otherwise requested. Please refer to the reflexed panel results for information regarding characterization of the IGH abnormality.",

  igh3del:
    "The 1G1F signal pattern, with the IGH break apart probe, is indicative of deletion of the 3' region of the IGH locus. It is not clear if this IGH abnormality detected by FISH, is accompanied by a translocation. The possibility of a clinically significant unbalanced rearrangement involving IGH cannot be ruled out.  The prognostic significance of IGH rearrangement depends on the fusion partner. The IGH Complex FISH panel will be performed separately, unless otherwise requested. Please refer to results of IGH Complex FISH panel for information regarding characterization of the IGH abnormality.",

  three:
    "The presence of 3 or more high-risk cytogenetic abnormalities identified in this panel is evidence for ultra-high risk disease.",

  trisomies:
    "In patients with multiple myeloma, trisomies, particularly of the odd numbered chromosomes, are common.  If clinically indicated, further evaluation of the ploidy status with the 5/9/15 probe set should be considered.",

  insufficient:
    "The isolated gain of one chromosome in the 5/9/15 probe set is insufficient to establish hyperdiploidy.",

  ighconfirm: "The concurrent IGH probes confirm the IGH gene rearrangement. ",

    marginal: "The presence of this anomaly should be interpreted with caution because of its detection only marginally above cutoff.",

    noTargeted: "No targeted rearrangements are identified."

};

let references = {
  del13q: ["Sonneveld", "Chiecchio", "Rajkumar", "MSmart"],
  mono13: ["Sonneveld", "Chiecchio", "Binder", "MSmart"],
  gain1q: ["Manier", "Rajkumar", "Giri", "MSmart"],
  del1p: ["Manier", "Rajkumar", "Giri", "MSmart"],
  amp1q: ["Manier", "Rajkumar", "MSmart"],
  del17p: ["Manier", "Thakurta", "Rajkumar", "MSmart"],
  mono17: ["Kumar", "Thakurta", "Rajkumar", "MSmart"],
  ccnd1: ["Rajkumar", "MSmart"],
  gainCCND1: ["Manier", "Rajkumar", "MSmart"],
  gainCCND1pending: "",
  fgfr3: ["Rajkumar", "MSmart"],
  maf: ["Rajkumar", "MSmart"],
  mafb: ["Rajkumar", "MSmart"],
  del20q: ["White", "Rajkumar", "MSmart"],
  ighrearr: ["Sonneveld", "Manier", "Rajkumar", "MSmart"],
  mono16: "", //if value set to undefined, gives does not iterate error
  mono14: "",
  ighba: ["Rajkumar", "MSmart"],
  igh5del: "",
  igh3del: "",
  hyperdiploid: ["Wuilleme"],
  hyperdiploidHR: ["Chretien"],
  tetraploid: ["Sidana"],
  indeterminate: "",
  TP53Tri5: ["Sonneveld", "Chretien"],
    relTP53: ["Lakshman"],
  lossNF1:"",
  three: "",
  ccnd1hr: ["Leiba"],
  trisomies: "",
  insufficient: ["Wuilleme"],
  ighconfirm: "",
  possibleTetraploid: "",
    marginal: "",
    igh1r1f: ["Wlodarska"],
  noTargeted:"",
};

let reference_list = {
  Sonneveld:
    "Sonneveld P, et al. Treatment of Multiple Myeloma with High-risk Cytogenetics: A Consensus of the International Myeloma Working Group. Blood. 2016; 127(24):2955-2962.<br>",

  Rajkumar:
    "Rajkumar SV.  Multiple Myeloma: 2020 Update on Diagnosis, Risk-Stratification and Management.  Am J Hematol.  2020; 95(5):548-567.<br>",

  MSmart:
    "mSMART 3.0 Risk Stratification of Newly Diagnosed Multiple Myeloma, https://www.msmart.org/mm-treatment-guidelines.<br>",

  Chiecchio:
    "Chiecchio L, Protheroe RK, Ibrahim AH, et al. Deletion of chromosome 13 detected by conventional cytogenetics is a critical prognostic factor in myeloma. Leukemia. 2006;20(9):1610-1617.<br>",

  Binder:
    "Binder M et al. Prognostic Implications of Abnormalities of Chromosome 13 and the Presence of Multiple Cytogenetic High-risk Abnormalities in Newly Diagnosed Multiple Myeloma. Blood Ca Journal 2017; 7(9):e660.<br>",

  Manier:
    "Manier S et al. Genomic Complexity of Multiple Myeloma and its Clinical Implications. Nat Rev Clin Oncol. 2017; 14(2):100-113.<br>",

  Thakurta:
    "Thakurta A, et al. High Subclonal Fraction of 17p Deletion is Associated with Poor Prognosis in Multiple Myeloma.  Blood. 2019; 133(11):1217-1221.<br>",

  Kumar:
    "Kumar S, et al.  Trisomies in Multiple Myeloma: Impact on Survival in Patients with High-risk Cytogenetics.  Blood. 2012; 119(9):2100-5.<br>",

  White:
    "White J, et al.  Deletion(20q) as the Sole Abnormality in Plasma Cell Myeloma is not Associated with Plasma Cells as identified by cIg FISH. Cancer Genet. 2012; 205(12):644-52.<br>",

  Wuilleme:
    "Wuilleme S et al. Ploidy, as detected by fluorescence in situ hybridization, defines different subgroups in multiple myeloma. Leukemia 2005; 19:275-278.<br>",

  Saxe: "Saxe D, et al. Recent Advances in Cytogenetic Characterization of Multiple Myeloma.  Int J Lab Hem. 2019; 41:5-14.<br>",

  Duek: "Duek A et al. Newly diagnosed multiple myeloma patients carrying monoallelic deletion of the whole locus of immunoglobulin heavy chain gene have a better prognosis compared to those with t(4;14) and t(14;16). Genes Chromosomes Cancer. 2019;58:516–520.<br>",

  Chretien:
    "Chretien M-L et al.  Understanding the role of hyperdiploidy in myeloma prognosis:  which trisomies really matter.  Blood 2015; 126:2713-2719.<br>",

  Sidana:
    "Sidana, S et al.  Tetraploidy is associated with poor prognosis at diagnosis in multiple myeloma. Am J Hematol 2019:e117-e120.<br>",

  Lakshman:
    "Lakshman et al.  Natural history of multiple myeloma with de novo del(17p).  Blood Ca J 2019; 9:32.",

  Leiba:
    "Leiba, M et al.  Translocation t(11;14) in newly diagnosed patients with multiple myeloma:  Is it always favorable? Genes Chromosomes Ca 2016; 55:710-718.<br>",

    Giri: "Giri S, et al.  Chromosome 1 abnormalities and survival of patients with multiple myeloma in the era of novel agents.  Blood Advances 2020; 4(10):2245-2253.<br>",

    Wlodarska: "Wlodarska I et al.Telomeric IGH losses detectable by fluorescence in situ hybridization in chronic lymphocytic leukemia reflect somatic VH recombination events.J Mol Diagn. 2007 Feb; 9(1): 47- 54.<br>"
};

let reference_array = []; //to hold all reference keys
let ref_unique_array = []; //only unique reference keys

function detectedAbnormality(ntpKey, reference) {
  $("<span>"  + ntpKey + "<br>" + "<br>" + "</span>").appendTo("#allntp");
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
    document.getElementById("allReferences").innerText
  navigator.clipboard.writeText(copyText);
  console.log(copyText);
}

function copyInterpToClipboard() {
  var copyText = document.querySelector("#reportText").innerText;
  navigator.clipboard.writeText(copyText);
}

function copyRefsToClipboard() {
  var copyText = document.querySelector("#references").innerText;
  navigator.clipboard.writeText(copyText);
}
