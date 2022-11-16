<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cytogenetics -- Heme</title>
</head>
<body>
    <h2>Cytogenetics of Hematologic Disorders as Recorded in Atlas of Genetics and Cytogenetics in  Oncology and Hematology Database</h2>

    <p>The lists below are extracted from the <a href="http://atlasgeneticsoncology.org/Collab/anom_bandall.txt">Translocations and other gene rearrangements</a> database in the <a href="http://atlasgeneticsoncology.org">Atlas</a></p>

    <p>Use the links below to find ordered lists of cytogenetic anomalies by type or by disease state.  Within the lists, the anomalies are sorted numerically as in the ISCN:  X and Y before autosomes.  For disease states, the types of anomalies are ordered alphabetically except for translocations, which are given first and "iso" forms are given next to their relative type.</p>

    <p><em>Be aware that the parent database is historically encyclopedic and that the association of an anomaly with a particular disease state is not necessarily supported by current diagnostic guidelines.  See, e.g., inv(16) in the AML list.</em></p>

    <p><h4>Cytogenetic Anomalies by Type</h4></p>
    <ul>
        <li><a href="/atlasLists/s_anom_deletions.txt">Deletions</a></li>
        <li><a href="/atlasLists/s_anom_dic.txt">Dicentrics</a></li>
        <li><a href="/atlasLists/s_anom_dup.txt">Duplications</a></li>
        <li><a href="/atlasLists/s_anom_ins.txt">Insertions</a></li>
        <li><a href="/atlasLists/s_anom_inv.txt">Inversions</a></li>
        <li><a href="/atlasLists/s_anom_translocations.txt">Translocations</a></li>
        <li><a href="/atlasLists/anom_trisomies.txt">Trisomies</a></li>
        <li><a href="/atlasLists/anom_monosomies.txt">Monosomies</a></li>
    </ul>

    <p><h4>Cytogenetic Anomalies by Disease</h4></p>
    <ul>
        <li><a href="/atlasLists/s_anom_ALL.txt">ALL</a></li>
        <li><a href="/atlasLists/s_anom_AML.txt">AML</a></li>
        <li><a href="/atlasLists/s_anom_CLL.txt">CLL</a></li>
        <li><a href="/atlasLists/s_anom_ET.txt">Essential Thrombocythemia</a></li>
        <li><a href="/atlasLists/s_anom_lymphoma.txt">Lymphoma, all subtypes</a></li>
        <li><a href="/atlasLists/s_anom_DLBCL.txt">Lymphoma, DLBCL (Diffuse large B-cell lymphoma)</a></li>
        <li><a href="/atlasLists/s_anom_lymphoma_extranodal_mz.txt">Lymphoma, extra-nodal marginal zone</a></li>
        <li><a href="/atlasLists/s_anom_lymphoma_follicular.txt">Lymphoma, follicular</a></li>
        <li><a href="/atlasLists/s_anom_lymphoma_nodal_mz.txt">Lymphoma, nodal marginal zone</a></li>
        <li><a href="/atlasLists/s_anom_lymphoma_splenic_marginal.txt">Lymphoma, splenic marginal zone</a></li>
        <li><a href="/atlasLists/s_anom_MDS.txt">MDS (all subtypes)</a></li>
        <li><a href="/atlasLists/s_anom_MPD.txt">MPD (all subtypes)</a></li>
        <li><a href="/atlasLists/s_anom_myelofibrosis.txt">Myelofibrosis</a></li>
        <li><a href="/atlasLists/s_anom_myeloma_plasmaCell.txt">Myeloma and Plasma Cell Leukemia</a></li>
        <li><a href="/atlasLists/s_anom_polycythemia.txt">Polycythemia Vera</a></li>
        <li><a href="/atlasLists/s_anom_refAnemia.txt">Refractory Anemia</a></li>
        <li><a href="/atlasLists/s_anom_RAEB.txt">Refractory Anemia with Excess Blasts</a></li>
    </ul>
    <h5>Method</h5>
    <ol>
        <li>The database linked at the top of this webpage was reduced with the <strong>cut</strong> command to include only the fields labeled "Abnormality" , "Fusion Partner1", "Topography" and the first three "Comment" fields.</li> 
        <li>Non-heme entries were removed with <strong>grep</strong> -v -E and the result written into a new file anom.txt.</li>
        <li>anom.txt was then used to create new files for each anomaly type or disease state with <strong>grep</strong>.</li>
        <li>These were then tidied up by piping through <strong>sort</strong> and <strong>uniq</strong> commands.</li>
        <li>Final sorting of each file was done with the following shell script:</li>
    </ol>
        <pre>
        <code>
#!/bin/bash
#orders anomalies in file by type and ascending numerically
# the order of anomalies is t, del, der (includes ider), dic (includes idic), dup, i, ins, inv
# input list of all files in FILES variable 

FILES=" "  #list all files separated by space--no commas

for FILE in $FILES
do
 echo "Working on:$FILE" #gives status
 touch s_${FILE}  #creates newfile to append output
 sort -k1.3,4n ${FILE} | grep 't(' | grep -v 'der(' > s_${FILE} # removes the der formed by translocations since will be in der group
 sort -t \( -k2.1,2n ${FILE} | grep 'del(' >> s_${FILE}  #uses the opening ( in the ISCN as the field delimiter which then makes numerical sorting by -k flag reliable
 sort -t \( -k2.1,2n ${FILE} | grep 'der(' >> s_${FILE}
 sort -t \( -k2.1,2n ${FILE} | grep 'dic(' >> s_${FILE}
 sort -t \( -k2.1,2n ${FILE} | grep 'dup(' >> s_${FILE}
 sort -t \( -k2.1,2n ${FILE} | grep 'i(' >> s_${FILE}
 sort -t \( -k2.1,2n ${FILE} | grep 'ins(' >> s_${FILE}
 sort -t \( -k2.1,2n ${FILE} | grep 'inv(' >> s_${FILE}
 echo "Done with $FILE."
done
</code>
</pre>
</p>
</body>
</html>