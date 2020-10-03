const sec = document.createElement("section");
sec.classList.add("header");
document.body.append(sec);

const division = document.createElement("div");
division.classList.add("header_pic");
sec.append(division);
// Profile Photo
const image = document.createElement("img");
image.setAttribute("src","Capture.png");
image.setAttribute("alt","Profile photo");
image.classList.add("photo");
division.append(image);
//Profile Name
const division1 = document.createElement("div");
division1.classList.add("name");
sec.append(division1);

const span = document.createElement("span");
span.innerHTML = "BRAIN DUDEY";
division1.append(span);
//End of section

const div = document.createElement("div");
div.classList.add("colour");
document.body.append(div);

const div1 = document.createElement("div");
div1.classList.add("colour1");
document.body.append(div1);

//details
const detail = document.createElement("div");
detail.classList.add("details");
document.body.append(detail);

const para = document.createElement("p");
para.innerHTML = "N.Damen Avenue, Chicago 99999|999-999-9999|hello@kickresume.com|www.kickresume.com";
detail.append(para);
//End of details

const line = document.createElement("hr");
document.body.append(line);

//Profile
const prof = document.createElement("div");
prof.classList.add("container");
document.body.append(prof);

const flex = document.createElement("div");
flex.setAttribute("id","flexDiv");
prof.append(flex);

const Profile = document.createElement("div");
Profile.classList.add("profile");
flex.append(Profile);

//Profile Icon
const profIcon = document.createElement("div");
profIcon.classList.add("profile-icon");
Profile.append(profIcon);

const faUser = document.createElement("i");
faUser.classList.add("fa");
faUser.classList.add("fa-user");
profIcon.append(faUser);

const h2Tag = document.createElement("h2");
h2Tag.innerHTML = "Profile";
Profile.append(h2Tag);

//Profile Text
const profText =document.createElement("div");
profText.classList.add("profile-text");
flex.append(profText);

const para1 = document.createElement("p");
para1.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit velit odit asperiores enim alias beatae placeat est deserunt, necessitatibus quidem nam assumenda numquam sapiente, non totam, et blanditiis incidunt. Voluptatem, voluptate hic exercitationem culpa fuga accusantium quidem tenetur laborum."
profText.append(para1);

//Skills
const skill = document.createElement("div");
skill.classList.add("profile");
flex.append(skill);

const profIcon1 = document.createElement("div");
profIcon1.classList.add("profile-icon");
skill.append(profIcon1);

const faFlask = document.createElement("i");
faFlask.classList.add("fa");
faFlask.classList.add("fa-flask");
faFlask.setAttribute("aria-hidden" , "true");
profIcon1.append(faFlask);

const hTwo = document.createElement("h2");
hTwo.innerHTML = "Skills";
skill.append(hTwo);

//Skills Section
const skillInfo = document.createElement("div");
skillInfo.classList.add("skills-info");
flex.append(skillInfo);

const section1 = document.createElement("section");
section1.setAttribute("id" , "skills");
skillInfo.append(section1);

const h4Tag = document.createElement("h4");
h4Tag.innerHTML = "Technical Skills";
section1.append(h4Tag);

const mySkills = document.createElement("div");
mySkills.classList.add("myskills");
section1.append(mySkills);

const skillItem = document.createElement("div");
skillItem.classList.add("skillitem");
mySkills.append(skillItem);

const prgm = document.createElement("div");
prgm.classList.add("programming");
skillItem.append(prgm);

const unlist = document.createElement("ul");
prgm.append(unlist);

const html = document.createElement("h3");
html.innerHTML = "HTML";
unlist.append(html);

const hbar = document.createElement("span");
hbar.classList.add("bar");
unlist.append(hbar);

const hspan = document.createElement("span");
hspan.classList.add("html");
hbar.append(hspan);

const css = document.createElement("h3");
css.innerHTML = "CSS";
unlist.append(css);

const cbar = document.createElement("span");
cbar.classList.add("bar");
unlist.append(cbar);

const cspan = document.createElement("span");
cspan.classList.add("css");
cbar.append(cspan);

const js = document.createElement("h3");
js.innerHTML = "JavaScript";
unlist.append(js);

const jbar = document.createElement("span");
jbar.classList.add("bar");
unlist.append(jbar);

const jspan = document.createElement("span");
jspan.classList.add("js");
jbar.append(jspan);

const sql = document.createElement("h3");
sql.innerHTML = "JavaScript";
unlist.append(sql);

const sbar = document.createElement("span");
sbar.classList.add("bar");
unlist.append(sbar);

const sspan = document.createElement("span");
sspan.classList.add("sql");
sbar.append(sspan);

//second
const prgm1 = document.createElement("div");
prgm1.classList.add("programming");
skillItem.append(prgm1);

const unlist1 = document.createElement("ul");
prgm1.append(unlist1);

const python = document.createElement("h3");
python.innerHTML = "Python";
unlist1.append(python);

const pbar = document.createElement("span");
pbar.classList.add("bar");
unlist1.append(pbar);

const pspan = document.createElement("span");
pspan.classList.add("java");
pbar.append(pspan);

const boot = document.createElement("h3");
boot.innerHTML = "Bootstrap";
unlist1.append(boot);

const bbar = document.createElement("span");
bbar.classList.add("bar");
unlist1.append(bbar);

const bspan = document.createElement("span");
bspan.classList.add("bootstrap");
bbar.append(bspan);

const nodejs = document.createElement("h3");
nodejs.innerHTML = "NodeJS";
unlist1.append(nodejs);

const nbar = document.createElement("span");
nbar.classList.add("bar");
unlist1.append(nbar);

const nspan = document.createElement("span");
nspan.classList.add("nodejs");
nbar.append(nspan);

const flutter = document.createElement("h3");
flutter.innerHTML = "Flutter";
unlist1.append(flutter);

const fbar = document.createElement("span");
fbar.classList.add("bar");
unlist1.append(fbar);

const fspan = document.createElement("span");
fspan.classList.add("nodejs");
fbar.append(fspan);

//Additional Skills
const Sinfo = document.createElement("div");
Sinfo.classList.add("skills-info");
flex.append(Sinfo);

const Skill = document.createElement("section");
Skill.setAttribute("id","skills");
Sinfo.append(Skill);

const hFour = document.createElement("h4");
hFour.innerHTML = "Additional Skills";
Skill.append(hFour);

const mSkills = document.createElement("div");
mSkills.classList.add("mSkills");
Skill.append(mSkills);

const sItem = document.createElement("div");
sItem.classList.add("skillitem");
mSkills.append(sItem);

const adnl = document.createElement("div");
adnl.classList.add("additional");
sItem.append(adnl);

const unList = document.createElement("ul");
adnl.append(unList);

const hThree = document.createElement("h3");
hThree.innerHTML = "Project Management";
unList.append(hThree);

const pmspan = document.createElement("span");
pmspan.classList.add("bar");
unList.append(pmspan);

const pm = document.createElement("span");
pm.classList.add("html");
pmspan.append(pm);

const hThree1 = document.createElement("h3");
hThree1.innerHTML = "Recruitment";
unList.append(hThree1);

const rmspan = document.createElement("span");
rmspan.classList.add("bar");
unList.append(rmspan);

const rm = document.createElement("span");
rm.classList.add("css");
rmspan.append(rm);

//second

const adnl1= document.createElement("div");
adnl1.classList.add("additional");
sItem.append(adnl1);

const unList1 = document.createElement("ul");
adnl1.append(unList1);

const hThree2 = document.createElement("h3");
hThree2.innerHTML = "Business development";
unList1.append(hThree2);

const bdspan = document.createElement("span");
bdspan.classList.add("bar");
unList1.append(bdspan);

const bd = document.createElement("span");
bd.classList.add("java");
bdspan.append(bd);

const hThree3 = document.createElement("h3");
hThree3.innerHTML = "Editing";
unList1.append(hThree3);

const edspan = document.createElement("span");
edspan.classList.add("bar");
unList1.append(edspan);

const ed = document.createElement("span");
ed.classList.add("bootstrap");
edspan.append(ed);

//work Experience
const work = document.createElement("div");
work.classList.add("profile");
flex.append(work);

const workExp = document.createElement("div");
workExp.classList.add("profile-icon");
work.append(workExp);

const briefCase = document.createElement("i");
briefCase.classList.add("fa");
briefCase.classList.add("fa-briefcase");
workExp.append(briefCase);

const wExp = document.createElement("h2");
wExp.innerHTML = "Work Experience";
work.append(wExp);

//Experience Text
const expText = document.createElement("div");
expText.classList.add("profile-text");
flex.append(expText);

const expHtag = document.createElement("h3");
expHtag.innerHTML = "Manager  03/2014-02/2017 Washington-DC";
expText.append(expHtag);

const expunList = document.createElement("ul");
expText.append(expunList);

const expList = document.createElement("li");
expList.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum illo consectetur iusto a ipsum accusamus optio, laboriosam unde expedita sequi consequuntur maxime dignissimos quidem placeat praesentium suscipit? Odit, earum impedit."
expunList.append(expList);

const expList1 = document.createElement("li");
expList1.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium adipisci earum cupiditate aspernatur cum numquam quod magni temporibus est, sapiente necessitatibus magnam similique nesciunt aliquam facilis consectetur. Architecto maiores unde, illo quam repudiandae ea omnis sit voluptas numquam, accusamus voluptates?"
expunList.append(expList1);

const expList2 = document.createElement("li");
expList2.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, suscipit. Tenetur quibusdam animi, ducimus alias vitae odio ab accusantium? Debitis!"
expunList.append(expList2);

const expList3 = document.createElement("li");
expList3.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, unde."
expunList.append(expList3);

const divi = document.createElement("hr");
prof.append(divi);

//flex-right
const flex1 = document.createElement("div");
flex1.setAttribute("id","flexDiv1");
prof.append(flex1);

//work Experience
const expn = document.createElement("div");
expn.classList.add("profile");
flex1.append(expn);

const expnicon = document.createElement("div");
expnicon.classList.add("profile-icon");
expn.append(expnicon);

const faBrief = document.createElement("i");
faBrief.classList.add("fa");
faBrief.classList.add("fa-briefcase");
expnicon.append(faBrief);

const text = document.createElement("h2");
text.innerHTML = "Work Experience";
expn.append(text);

//Experience Text
const expnText = document.createElement("div");
expnText.classList.add("profile-text1");
flex1.append(expnText);

const eText = document.createElement("h3");
eText.innerHTML = "Community-Relations 03/2014-02/2017 Manager";
expnText.append(eText);

const par = document.createElement("p");
par.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
expnText.append(par);

const ul = document.createElement("ul");
expnText.append(ul);

const list = document.createElement("li");
list.innerHTML = "Lorem ipsum dolor sit amet.";
ul.append(list);

const list1 = document.createElement("li");
list1.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, dicta.";
ul.append(list1);

const list2 = document.createElement("li");
list2.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, atque?";
ul.append(list2);

const list3 = document.createElement("li");
list3.innerHTML = "Lorem ipsum dolor sit amet.";
ul.append(list3);

//Education
//profile icon
const edu = document.createElement("div");
edu.classList.add("profile");
flex1.append(edu);

const eduIcon = document.createElement("div");
eduIcon.classList.add("profile-icon");
edu.append(eduIcon);

const gradCap = document.createElement("i");
gradCap.classList.add("fa");
gradCap.classList.add("fa-graduation-cap");
eduIcon.append(gradCap);

const education = document.createElement("h2");
education.innerHTML = "Education";
edu.append(education);

const eduprg = document.createElement("div");
eduprg.classList.add("profile-text1");
flex1.append(eduprg);

const eduPrgt = document.createElement("h3");
eduPrgt.innerHTML = "Engineering-Immersion 03/2014-02/2017 Program";
eduprg.append(eduPrgt);

const eduParag = document.createElement("p");
eduParag.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laborum odit assumenda obcaecati explicabo dolorem eligendi suscipit quis, accusamus neque possimus molestiae rem velit officiis porro dolores maxime enim in!";
eduprg.append(eduParag);

const unoList = document.createElement("ul");
eduprg.append(unoList);

const eduDetails = document.createElement("li");
eduDetails.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis veniam accusamus architecto pariatur explicabo vel facilis amet nostrum neque? Non, dolor. Molestiae eligendi ipsa modi labore iusto. Iure nostrum dolorem corporis numquam suscipit odit necessitatibus natus, corrupti quos obcaecati totam odio assumenda laborum tempore itaque in ducimus reiciendis maxime doloremque et vero deleniti voluptates esse? Rem quia molestias ducimus id, eaque vitae nihil a sunt officia saepe consequatur hic incidunt! Enim a doloremque repellat nisi error sit soluta reiciendis?";
unoList.append(eduDetails);

const eduDetails1 = document.createElement("li");
eduDetails1.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugit corporis suscipit sunt velit animi pariatur, consequatur aliquid provident ea dicta maiores unde, tempore, fuga et illo. Asperiores recusandae corporis incidunt culpa temporibus dolores, quod dolore? Molestiae impedit cumque fugiat cupiditate. Et aspernatur cumque expedita nihil, eligendi consectetur qui non deleniti? Molestias consequatur accusantium temporibus. Illum maiores obcaecati ad consectetur?";
unoList.append(eduDetails1);

const eduDetails2 = document.createElement("li");
eduDetails2.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Cumque incidunt veritatis tempore, harum magni in illum commodi possimus atque quo optio architecto ullam a saepe blanditiis cum voluptate expedita accusantium neque quibusdam? Hic iure incidunt tempora laboriosam nemo rerum sapiente unde nihil, ipsa deserunt commodi nisi, eos, dolorem veritatis explicabo doloremque saepe! Aut aliquam repudiandae voluptas adipisci quaerat deserunt modi ab veniam dignissimos sint dolor consectetur cupiditate distinctio, esse quidem commodi ipsam? Saepe laudantium, consequuntur atque incidunt facilis voluptatem minima quam earum aliquam animi perspiciatis deleniti quis possimus expedita esse recusandae dolorum ipsum nisi reiciendis eaque veritatis rem repellat consectetur numquam. Eveniet neque, fugit eligendi provident laudantium repudiandae nostrum numquam quas illum voluptatum similique porro nisi tempore vitae blanditiis et unde labore quae vel explicabo! Possimus voluptatum eligendi impedit ab in maiores nemo sunt? Dolore repudiandae facilis fugiat a, vero eligendi ratione voluptatum ducimus labore ipsa. Neque!";
unoList.append(eduDetails2);

const end = document.createElement("h3");
end.innerHTML = "B.A.English 09/2001-09/2005 California";
eduprg.append(end);












