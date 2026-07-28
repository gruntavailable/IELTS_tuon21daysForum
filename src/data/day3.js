const TF = ["TRUE","FALSE","NOT GIVEN"];
export default
{
id:3, title:"Ngày 03 — Bằng chứng trong Reading",
focus:"Chuyển trọng tâm từ CHỌN đáp án sang CHỨNG MINH đáp án. Mỗi câu phải có vị trí bằng chứng, cặp paraphrase và nhãn bẫy.",
blocks:[

{t:"note",title:"Phân biệt ba loại nhận định & bốn nhãn bẫy",tag:"Lý thuyết",html:`
<ul class="tips">
<li><b style="color:var(--ok)">TRUE</b>: bài đọc diễn đạt cùng một ý, dù có thể dùng từ ngữ khác.</li>
<li><b style="color:var(--bad)">FALSE</b>: bài đọc đưa ra ý trái ngược hoặc khiến nhận định không thể đúng.</li>
<li><b style="color:var(--warn)">NOT GIVEN</b>: bài đọc không cung cấp đủ thông tin để quyết định.</li>
</ul>
<div class="model" style="border-color:#7a4a2f;background:rgba(240,169,46,.07)"><span class="lb" style="color:var(--warn)">Cách suy luận dễ gây sai</span>
“This sounds reasonable, so it is probably True.”<br>
<span style="color:var(--tx2)">Reading không kiểm tra một nhận định có hợp lý theo hiểu biết chung hay không. Nhiệm vụ là xác định bài đọc có cung cấp bằng chứng hay không.</span></div>
<p style="margin:14px 0 6px"><b>Bốn nhãn bẫy</b></p>
<ul class="tips">
<li><b>TRÁI NGƯỢC</b> — bài đọc nêu rõ ý ngược lại.</li>
<li><b>THIẾU THÔNG TIN</b> — một phần của nhận định không xuất hiện trong bài.</li>
<li><b>MỨC ĐỘ TUYỆT ĐỐI</b> — nhận định thêm <i>all, only, always, never, completely, every</i>.</li>
<li><b>BẪY TỪ KHOÁ</b> — cùng một từ xuất hiện nhưng quan hệ nghĩa đã thay đổi.</li>
</ul>`},

{t:"passage",title:"Practice Passage 03",subtitle:"The Reinvention of the Public Library",paras:[
["A","For much of the twentieth century, the public library was easy to describe. It was a quiet building that stored books and allowed local residents to borrow them. That function remains important, but it no longer captures the full role of many modern libraries. As information has moved online, libraries have had to answer a difficult question: what should a public institution provide when books and facts can be reached from a phone?"],
["B","One response has been to expand access to technology. In communities where home internet is unreliable or expensive, library computers and Wi-Fi are not minor conveniences. They may be the only practical way for a job seeker to complete an online application, for a student to download school materials or for an older resident to communicate with a public service. The existence of digital information does not remove inequality. In some cases, it makes access to a device and a stable connection even more important."],
["C","Libraries have also become spaces for guided learning. A person searching online faces a huge quantity of material, much of it unreliable, commercially motivated or difficult to evaluate. Librarians increasingly help visitors locate trustworthy sources, understand databases and distinguish evidence from opinion. This role is less visible than lending a physical book, but it is central to a society in which misinformation can spread rapidly."],
["D","A third development is the growth of community programmes. Libraries may host language classes, children’s activities, career workshops, local history groups and basic digital training. These events are often free or inexpensive, which makes them accessible to people who cannot pay for private courses. They also give residents a reason to share a public space without being expected to buy anything."],
["E","Not everyone welcomes this expansion. Some regular users worry that conversation, group activities and children’s events weaken the quiet environment that made libraries valuable. Staff can also be placed under pressure when a single building is expected to function as a reading room, technology centre, classroom, social service and community hall. Expanding the mission without increasing funding may produce an institution that promises more than it can deliver."],
["F","Design can reduce some of these tensions. Newer libraries often separate silent study zones from collaborative areas. Movable furniture allows rooms to serve different purposes at different times, while sound-absorbing materials limit disturbance. These solutions require investment, but they recognise that silence and community activity do not have to be treated as complete opposites."],
["G","The value of a library is also difficult to measure. Counting borrowed books captures only one part of its impact. A visitor may use a desk for three hours, receive help with a government form, attend a free class or simply spend time in a safe indoor space. None of these activities appears clearly in traditional lending statistics. As a result, a library can look less active on paper even while it is serving a wider range of needs."],
["H","The future of public libraries will probably differ from place to place. A rural town may need reliable internet and access to government services, while a dense urban neighbourhood may need quiet study space and children’s programmes. The strongest libraries are therefore unlikely to follow one universal model. Their shared principle is more basic: public access to knowledge, support and space should not depend entirely on a person’s income."]
]},

{t:"quiz",title:"Questions 1–7 · True / False / Not Given",tag:"Reading",shared:TF,start:1,items:[
{q:"Modern public libraries have completely stopped focusing on book lending.",a:1,
 ev:"Đoạn A: “That function <b>remains important</b>, but it no longer captures the full role…”",
 exp:"Bẫy MỨC ĐỘ TUYỆT ĐỐI (<i>completely stopped</i>) kết hợp TRÁI NGƯỢC. Bài nói chức năng cho mượn sách vẫn quan trọng, chỉ là chưa đủ."},
{q:"Some people depend on library internet access to complete employment-related tasks.",a:0,
 ev:"Đoạn B: “They may be the only practical way for a <b>job seeker to complete an online application</b>.”",
 exp:"<i>the only practical way</i> ↔ <i>depend on</i>; <i>job application</i> ↔ <i>employment-related tasks</i>."},
{q:"The passage states that online information is generally more reliable than printed information.",a:2,
 ev:"Đoạn C chỉ nói “much of it unreliable” — không hề <b>so sánh</b> online với printed.",
 exp:"NOT GIVEN. Bài có nói về độ tin cậy của thông tin online, nhưng không đưa ra phép so sánh nào với tài liệu in. Bẫy THIẾU THÔNG TIN."},
{q:"Librarians may teach visitors how to judge the quality of sources.",a:0,
 ev:"Đoạn C: “Librarians increasingly help visitors <b>locate trustworthy sources</b>… and <b>distinguish evidence from opinion</b>.”",
 exp:"<i>judge the quality of sources</i> là cách khái quát hoá đúng của hai hành động trên."},
{q:"Every community programme in a library is free.",a:1,
 ev:"Đoạn D: “These events are <b>often free or inexpensive</b>.”",
 exp:"<i>often free or inexpensive</i> ≠ <i>every … is free</i>. Bẫy MỨC ĐỘ TUYỆT ĐỐI."},
{q:"Some library users believe that additional activities can damage the quiet atmosphere.",a:0,
 ev:"Đoạn E: “Some regular users worry that conversation, group activities and children’s events <b>weaken the quiet environment</b>.”",
 exp:"<i>weaken</i> ↔ <i>damage</i>; <i>some regular users</i> ↔ <i>some library users</i>. Mức độ khớp nhau."},
{q:"Sound-absorbing materials are the cheapest way to redesign a library.",a:2,
 ev:"Đoạn F: “These solutions <b>require investment</b>” — nhưng không xếp hạng chi phí giữa các giải pháp.",
 exp:"NOT GIVEN. Bài xác nhận là <i>tốn tiền</i>, không nói <i>rẻ nhất</i>. Đừng nhầm sang FALSE: “tốn tiền” không mâu thuẫn với “rẻ nhất trong các cách”."}
]},

{t:"gap",title:"Questions 8–14 · Sentence Completion",tag:"Reading",start:8,
instr:"Hoàn thành mỗi câu bằng KHÔNG QUÁ BA TỪ lấy từ bài đọc.",items:[
{q:"A stable connection and a device may become more important because digital information does not remove ______.",a:["inequality"],
 ev:"Đoạn B: “The existence of digital information does not remove <b>inequality</b>.”",exp:"Danh từ không đếm được, không thêm <i>-ies</i>."},
{q:"Librarians help visitors distinguish evidence from ______.",a:["opinion"],ev:"Đoạn C: “…distinguish evidence from <b>opinion</b>.”",exp:"Lấy nguyên văn, số ít."},
{q:"Libraries allow residents to share public space without needing to ______.",a:["buy anything"],
 ev:"Đoạn D: “…share a public space without being expected to <b>buy anything</b>.”",exp:"<i>without being expected to</i> ↔ <i>without needing to</i>."},
{q:"Staff may face pressure if one building is expected to perform too many ______.",a:["functions","roles","function"],
 ev:"Đoạn E: “…when a single building is expected to <b>function</b> as a reading room, technology centre, classroom, social service and community hall.”",
 exp:"Bài dùng <i>function</i> ở dạng động từ; câu hỏi cần danh từ số nhiều. Chấp nhận <i>functions</i> / <i>roles</i>."},
{q:"Modern designs may use ______ so rooms can change function.",a:["movable furniture"],
 ev:"Đoạn F: “<b>Movable furniture</b> allows rooms to serve different purposes at different times.”",exp:"<i>serve different purposes</i> ↔ <i>change function</i>."},
{q:"Traditional statistics mainly count the number of ______.",a:["borrowed books","books borrowed"],
 ev:"Đoạn G: “<b>Counting borrowed books</b> captures only one part of its impact.”",exp:"Đúng 2 từ, giữ nguyên trật tự trong bài."},
{q:"The passage argues that access to knowledge and space should not depend entirely on a person’s ______.",a:["income"],
 ev:"Đoạn H: “…should not depend entirely on a person’s <b>income</b>.”",exp:"Câu cuối bài — thường là nơi đặt câu hỏi tổng kết."}
]},

{t:"quiz",title:"Nhận diện paraphrase",tag:"Reading",kind:"free",
instr:"Tìm cách diễn đạt tương ứng trong bài đọc cho mỗi ý. Đây là bài tập quan trọng nhất của Ngày 3 — nó tạo chất liệu cho Writing.",
items:[
{q:"1. cannot afford private classes",model:"Đoạn D — “people who cannot pay for private courses”",exp:"<i>afford</i> ↔ <i>pay for</i>; <i>classes</i> ↔ <i>courses</i>."},
{q:"2. information that cannot be trusted",model:"Đoạn C — “a huge quantity of material, much of it unreliable”",exp:"Tính từ phủ định <i>unreliable</i> thay cho mệnh đề quan hệ."},
{q:"3. a building used for many different functions",model:"Đoạn E — “a single building is expected to function as a reading room, technology centre, classroom, social service and community hall”",exp:"Bài dùng <b>liệt kê cụ thể</b> thay cho từ khái quát — dạng paraphrase hay bị bỏ sót."},
{q:"4. reduce conflict between quiet and activity",model:"Đoạn F — “Design can reduce some of these tensions” / “silence and community activity do not have to be treated as complete opposites”",exp:"<i>conflict</i> ↔ <i>tensions</i>."},
{q:"5. impact not shown by older statistics",model:"Đoạn G — “None of these activities appears clearly in traditional lending statistics”",exp:"<i>not shown by</i> ↔ <i>does not appear in</i> (đảo chủ ngữ)."},
{q:"6. different needs in different locations",model:"Đoạn H — “The future of public libraries will probably differ from place to place”",exp:"<i>locations</i> ↔ <i>place to place</i>."},
{q:"7. access should not be controlled by wealth",model:"Đoạn H — “should not depend entirely on a person’s income”",exp:"<i>wealth</i> ↔ <i>income</i>; <i>controlled by</i> ↔ <i>depend on</i>."},
{q:"8. help with an official document",model:"Đoạn G — “receive help with a government form”",exp:"<i>official document</i> ↔ <i>government form</i>."},
{q:"9. use the same area together",model:"Đoạn D — “share a public space”",exp:"Động từ <i>share</i> gói gọn cả cụm."},
{q:"10. apply for work online",model:"Đoạn B — “complete an online application”",exp:"Chuyển từ động từ (<i>apply</i>) sang danh từ (<i>application</i>) — nominalisation."}
]},

{t:"quiz",title:"Phép quy chiếu và từ chỉ lượng",tag:"Grammar",start:1,col:true,
instr:"Chọn phương án đúng.",items:[
{q:"1. Digital information does not remove ______ in access.",opts:["inequality","inequalities"],a:0,
 exp:"<i>inequality</i> ở nghĩa khái quát là không đếm được. (<i>inequalities</i> chỉ dùng khi nói tới các dạng bất bình đẳng cụ thể, ví dụ <i>regional inequalities</i>.)"},
{q:"2. Libraries provide ______.",opts:["many useful information","a great deal of useful information"],a:1,
 exp:"<i>information</i> không đếm được → không dùng <i>many</i>. Dùng <i>a great deal of / much / a lot of</i>."},
{q:"3. A visitor may receive help, and ______ can be difficult to measure.",opts:["this","these"],a:0,
 exp:"Quy chiếu về <b>một</b> ý vừa nêu (việc nhận trợ giúp) → số ít <i>this</i>."},
{q:"4. New zones reduce noise, ______ means different users can share the building.",opts:["which","that"],a:0,
 exp:"Mệnh đề quan hệ không xác định (có dấu phẩy, quy chiếu cả mệnh đề trước) bắt buộc dùng <i>which</i>; <i>that</i> không bao giờ đứng sau dấu phẩy."},
{q:"5. There are ______ physical books in some redesigned spaces.",opts:["fewer","less"],a:0,
 exp:"<i>books</i> đếm được → <i>fewer</i>. (<i>less</i> dùng cho không đếm được: <i>less space</i>.)"},
{q:"6. ______ of community programmes is increasing.",opts:["The number","A number"],a:0,
 exp:"Động từ <i>is</i> số ít → <i>The number of</i>. Cụm này nói về <b>con số</b>."},
{q:"7. ______ of residents use libraries for internet access.",opts:["The number","A number"],a:1,
 exp:"Động từ <i>use</i> số nhiều → <i>A number of</i> (= một số). Hai câu 6–7 là cặp đối chiếu, hãy nhớ theo động từ."},
{q:"8. Staff need ______ if their responsibilities expand.",opts:["more funding","more fundings"],a:0,
 exp:"<i>funding</i> không đếm được."}
]},

{t:"quiz",title:"Sửa câu cho tự nhiên",tag:"Grammar",kind:"free",items:[
{q:"Libraries give people many knowledges.",model:"Libraries give people access to a great deal of knowledge.",exp:"<i>knowledge</i> không đếm được; thêm <i>access to</i> cho tự nhiên."},
{q:"The government should invest money for public libraries.",model:"The government should invest in public libraries.",exp:"Giới từ cố định: <i>invest <b>in</b></i>. <i>money</i> thường thừa."},
{q:"People can approach reliable information there.",model:"People can access reliable information there.",exp:"<i>approach</i> = tiếp cận theo nghĩa đến gần/cách xử lý; với thông tin phải dùng <i>access</i> hoặc <i>gain access to</i>."},
{q:"This service is very convenience for poor people.",model:"This service is very convenient for people on low incomes.",exp:"Sai dạng từ (<i>convenience</i> N → <i>convenient</i> Adj) và <i>poor people</i> hơi thô trong văn viết học thuật."},
{q:"The library has less visitors than before, but they stay longer.",model:"The library has fewer visitors than before, but they stay longer.",exp:"<i>visitors</i> đếm được → <i>fewer</i>."}
]},

{t:"writing",title:"Vận dụng vào Writing · Task 2 ngắn",tag:"Writing",
prompt:"Public libraries are no longer necessary because most information is available online. To what extent do you agree or disagree?",
instr:"Viết một đoạn thân bài 160–200 từ. Trình tự bắt buộc: <b>Luận điểm → bất bình đẳng số hoặc đánh giá nguồn tin → ví dụ thực tế → hệ quả rộng hơn</b>. Sau khi viết, gạch chân mọi chuỗi từ <b>5 từ trở lên</b> lấy trực tiếp từ bài đọc và viết lại chúng.",
check:["Có chuỗi 5+ từ nào bị chép nguyên từ passage không?","Ý mượn từ bài đọc đã được diễn đạt lại bằng cấu trúc khác chưa?","Chỉ giữ nguyên các thuật ngữ cố định (ví dụ <i>public library</i>, <i>digital divide</i>)."],
model:`<b>Mẫu paraphrase (sách gợi ý):</b><br>
Ý trong bài đọc: “The existence of digital information does not remove inequality.”<br>
Cách viết lại: “Putting information online does not guarantee that every citizen can reach or use it effectively.”<br><br>
<b>Đoạn mẫu (~190 từ):</b><br>
The claim that libraries have been made redundant by the internet rests on an assumption that does not survive contact with reality: that everyone can already reach what is online. Putting information on a website does not guarantee that every citizen can retrieve or use it effectively, because retrieval requires a device, a stable connection and a certain confidence in navigating unfamiliar systems. Households differ sharply in all three. The consequence is that digitisation can widen a gap rather than close it — the very people with the least reliable connection at home are often those who most need to submit a job application, download school materials or contact a public service. A library is one of the few places where those three requirements are supplied at no cost and without any obligation to spend money. There is also a second function that a search engine cannot perform: helping a visitor decide which of ten thousand results deserves to be trusted. If the wider aim of public policy is that opportunity should not track household income, then closing libraries would not reflect the abundance of information online so much as a decision about who is entitled to use it.`},

{t:"vocab",title:"Cụm từ về thư viện & không gian công cộng",tag:"Vocabulary",items:[
["public access to knowledge","quyền tiếp cận tri thức","Libraries protect public access to knowledge."],
["bridge the digital divide","thu hẹp khoảng cách số","Free internet can help bridge the digital divide."],
["a reliable source","nguồn đáng tin","Students need to distinguish a reliable source from a popular one."],
["evaluate information critically","đánh giá thông tin bằng tư duy phản biện","Media literacy helps people evaluate information critically."],
["a community hub","trung tâm sinh hoạt cộng đồng","The library has become a community hub."],
["a quiet study zone","khu học yên tĩnh","The second floor is used as a quiet study zone."],
["serve a wider range of needs","phục vụ nhiều nhu cầu hơn","Modern libraries serve a wider range of needs."],
["place staff under pressure","gây áp lực lên nhân viên","An expanding mission can place staff under pressure."],
["traditional lending statistics","số liệu mượn sách truyền thống","Traditional lending statistics miss many forms of use."],
["safe indoor space","không gian trong nhà an toàn","A library can provide a safe indoor space during extreme weather."],
["depend on a person’s income","phụ thuộc thu nhập","Basic public services should not depend on a person’s income."],
["follow a universal model","theo một khuôn mẫu chung","Libraries do not need to follow a universal model."]
]},

{t:"speaking",title:"Speaking về không gian công cộng",tag:"Speaking",parts:[
{label:"Part 1",qs:[
["Do you ever go to a library?","Less often than I used to, but I still go when I need to concentrate properly. There's something about a room where everyone else is working that makes it much harder to justify picking up my phone."],
["Do you prefer reading on paper or on a screen?","Paper for anything I need to think about carefully, screens for skimming. I retain arguments better on paper — possibly because I can see where a point sat on the page, which sounds trivial but genuinely helps."],
["Is there a quiet place where you usually study?","Yes, a small desk by the window in my bedroom. It isn't perfect, but I've used it long enough that sitting down there is now a signal to my brain that work is starting."],
["Did you use libraries more when you were younger?","Considerably more. As a child the library was where the books were; now it's where the silence is. The reason I go has changed completely even though the building hasn't."]
]},
{label:"Part 2 · Cue card",qs:[
["Describe a public place where you can study or concentrate. — where it is · what the place looks like · what you do there · and explain why it helps you concentrate",
"I'd like to describe the central public library in my city, which has become my default place to work whenever home stops being productive. It's about fifteen minutes away by bus, in a fairly plain 1970s building that is much more attractive inside than out. The upper floor is a designated quiet study zone: long wooden desks, individual lamps, tall windows along one side, and sound-absorbing panels on the ceiling that make the whole room feel oddly padded. Downstairs it's the opposite — there's a children's area, a career workshop most Thursdays, and people using the computers, so the building genuinely serves a wide range of needs at once. I usually go there for three or four hours on a Saturday, mainly for Reading practice and timed Writing, because those are the two things I cannot do while switching between tabs at home. As for why it works, I think there are two reasons. The obvious one is that the environment is designed for it. The subtler one is social: everyone around me is visibly working, so leaving my desk to check messages feels conspicuous in a way it never does in my own room."]
]},
{label:"Part 3",qs:[
["Why should cities provide free public spaces?","The core reason is equity. If every usable indoor space requires you to buy something, then access to quiet, warmth and a desk becomes a function of income, and that quietly excludes exactly the people who most need somewhere to work. There's a secondary benefit too: shared civic spaces are one of the few places where people from different backgrounds occupy the same room without a transaction. The limitation, of course, is funding — expanding what a building is expected to do without increasing its budget just places staff under pressure."],
["Will physical libraries disappear in the future?","I doubt they'll disappear, but I'd expect them to look increasingly different from place to place. A rural town may need reliable internet and access to government services, whereas a dense urban neighbourhood may need quiet study space and children's programmes. What makes me confident they'll survive is that their most valuable functions — supervised space, guidance, and access that doesn't depend on income — are precisely the ones a website cannot replicate."],
["How can people learn to identify unreliable information?","Partly through explicit teaching and partly through habit. The teachable part is mechanical: check who published it, whether there's a commercial motive, and whether the claim is reported anywhere independent. The habitual part is harder — people believe things that confirm what they already suspect, and no checklist fixes that. That's why librarians and teachers matter more than tools; they model the process of hesitating before accepting something, which is the skill that actually transfers."]
]}
]},

{t:"note",title:"Làm lại năm câu + Sản phẩm — Ngày 3",tag:"Checklist",html:`
<p class="instr">Đóng phần đáp án và chờ ít nhất <b>mười phút</b>. Làm lại năm câu đã đoán hoặc trả lời sai. Dưới mỗi đáp án, viết một câu bắt đầu bằng: <i>“I chose this because the passage says…”</i></p>
<ul class="tips checklist">
<li>Đáp án Reading (14 câu)</li>
<li>Phiếu ghi bằng chứng cho mọi câu sai hoặc chưa chắc chắn — 6 cột: Câu · Đáp án của tôi · Đáp án đúng · Từ ngữ làm bằng chứng · Bẫy · Thao tác cho lần sau</li>
<li>Mười cặp paraphrase</li>
<li>Một đoạn văn hoặc dàn ý đoạn</li>
<li>Một bản ghi âm Speaking ngắn</li>
</ul>
<div class="model" style="border-color:#7a4a2f;background:rgba(240,169,46,.07)"><span class="lb" style="color:var(--warn)">Lưu ý</span>
“Em thấy đáp án này hợp lý” chưa phải bằng chứng. Reading chỉ công nhận thứ passage thật sự nói.</div>`}
]}
;
