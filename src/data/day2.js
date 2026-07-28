const TF = ["TRUE","FALSE","NOT GIVEN"];
export default
{
id:2, title:"Ngày 02 — Luận đề và mạch lập luận",
focus:"Thesis phải trả lời đúng dạng đề, nêu rõ lập trường và báo trước chức năng của Body 1 / Body 2.",
blocks:[

{t:"note",title:"Thesis và lập trường",tag:"Lý thuyết",html:`
<div class="model"><span class="lb">Cách viết còn yếu</span>
<i>This essay will discuss whether schools should teach practical skills.</i><br>
<span style="color:var(--tx2)">→ Mới nêu chủ đề, chưa thể hiện lập trường.</span></div>
<div class="model" style="border-color:#2f7a52;background:rgba(47,191,113,.07)"><span class="lb" style="color:var(--ok)">Cách viết cải thiện</span>
<i>I agree that practical skills deserve more classroom time, but they should complement rather than replace academic subjects.</i><br>
<span style="color:var(--tx2)">→ Đọc xong đã đoán được: Body 1 vì sao kỹ năng thực tiễn cần chú trọng hơn; Body 2 vì sao môn học thuật vẫn cần thiết.</span></div>
<p style="margin:14px 0 6px"><b>Bốn lỗi thường gặp về lập trường</b></p>
<ul class="tips">
<li><b>Không xuất hiện:</b> mở bài không cho biết quan điểm người viết.</li>
<li><b>Thay đổi:</b> thesis đồng ý một phần nhưng kết luận đồng ý hoàn toàn.</li>
<li><b>Cân bằng thiếu căn cứ:</b> chia đều hai phía dù đề yêu cầu chọn phía thuyết phục hơn.</li>
<li><b>Quá rộng:</b> bỏ qua từ giới hạn như <i>children, governments, in schools, more than, entirely</i>.</li>
</ul>`},

{t:"passage",title:"Practice Passage 02",subtitle:"Practical Skills and the Modern School",paras:[
["A","Debates about school curricula often begin with a simple contrast. Academic subjects are associated with knowledge, examinations and university preparation, while practical subjects are linked to everyday life. This contrast is useful, but it can also be misleading. Mathematics may appear purely academic until a student uses percentages to compare loan costs. Communication may look like a soft practical skill until a scientist needs to explain complex findings clearly. In reality, the two sides overlap more than the debate usually suggests."],
["B","Supporters of practical education argue that many teenagers leave school without basic knowledge of money, contracts, nutrition, workplace communication or household responsibilities. These gaps can have immediate consequences. A young adult who does not understand interest rates may borrow carelessly. Someone who has never practised formal communication may struggle to write an email to an employer. Schools, from this perspective, should prepare students not only to pass examinations but also to manage ordinary adult decisions."],
["C","Critics, however, warn that the school day is limited. Every new compulsory course reduces the time available for an existing subject. They also point out that practical needs change. A lesson on a particular tax form or software platform may become outdated quickly, while a strong foundation in mathematics, reading and scientific reasoning remains useful across many situations. Schools cannot predict every task students will face, so they may serve learners better by developing adaptable minds."],
["D","A further difficulty concerns responsibility. Some people believe financial habits, cooking and household tasks should be taught mainly at home. Yet families do not have equal time, confidence or experience. A parent who has never had access to reliable financial advice may find it difficult to teach a child about savings and credit. Leaving practical education entirely to families can therefore reproduce existing inequalities."],
["E","The most promising approach may be integration rather than competition. Schools can teach practical applications through academic subjects. Mathematics lessons can include budgeting and interest. Language classes can cover professional emails and public speaking. Science can address nutrition, health claims and environmental decisions. This model preserves intellectual depth while showing students why knowledge matters outside an examination room."],
["F","Integration is not automatically successful. A practical example added at the end of a lesson can feel artificial if it is not connected to the main concept. Teachers also need training and suitable materials. Nevertheless, the debate becomes more productive when it moves beyond the question of which category should win. The real question is how schools can give students both a strong intellectual foundation and the confidence to use knowledge in adult life."]
]},

{t:"quiz",title:"Câu hỏi 1–5 · Ghép tiêu đề (Matching Headings)",tag:"Reading",start:1,col:true,
instr:"Chọn tiêu đề phù hợp nhất cho các đoạn B–F.",
shared:["I. Unequal families and unequal preparation","II. A false division between two kinds of learning","III. The risk of teaching information that soon becomes old","IV. Combining application with academic content","V. Immediate problems caused by missing life knowledge","VI. Why examinations should be removed","VII. The need to implement integration carefully","VIII. Practical subjects as the only useful form of education"],
items:[
{q:"Paragraph B",a:4,ev:"“These gaps can have <b>immediate consequences</b>… may borrow carelessly… may struggle to write an email.”",
 exp:"Toàn đoạn liệt kê hậu quả trước mắt của việc thiếu kiến thức đời sống → <b>V</b>. (II thuộc đoạn A; VIII quá tuyệt đối, không đoạn nào nói vậy.)"},
{q:"Paragraph C",a:2,ev:"“A lesson on a particular tax form or software platform may <b>become outdated quickly</b>.”",
 exp:"Ý trung tâm là rủi ro dạy nội dung nhanh lỗi thời → <b>III</b>. Thời lượng eo hẹp chỉ là ý phụ."},
{q:"Paragraph D",a:0,ev:"“families do not have equal time, confidence or experience… can therefore reproduce existing <b>inequalities</b>.”",exp:"Gia đình không đồng đều → chuẩn bị không đồng đều → <b>I</b>."},
{q:"Paragraph E",a:3,ev:"“Schools can teach practical <b>applications through academic subjects</b>.”",exp:"Đúng nghĩa <i>integration rather than competition</i> → <b>IV</b>."},
{q:"Paragraph F",a:6,ev:"“Integration is <b>not automatically successful</b>… Teachers also need training and suitable materials.”",exp:"Cảnh báo về điều kiện để tích hợp thành công → <b>VII</b>. Bẫy: IV và VII rất gần nhau — IV là *ý tưởng*, VII là *cách triển khai*."}
]},

{t:"gap",title:"Questions 6–8 · Short Answer",tag:"Reading",start:6,
instr:"Trả lời bằng KHÔNG QUÁ NĂM TỪ lấy từ bài đọc.",items:[
{q:"What may a young adult misunderstand before borrowing carelessly?",a:["interest rates"],
 ev:"Đoạn B: “A young adult who does not understand <b>interest rates</b> may borrow carelessly.”",exp:"Câu hỏi lặp gần nguyên văn — chỉ cần định vị đúng."},
{q:"Which three academic foundations are described as useful across many situations?",a:["mathematics reading and scientific reasoning","mathematics, reading and scientific reasoning","mathematics reading scientific reasoning"],
 ev:"Đoạn C: “a strong foundation in <b>mathematics, reading and scientific reasoning</b> remains useful across many situations.”",exp:"Đúng 5 từ — phải chép đủ cả ba, không được rút gọn."},
{q:"What do teachers require in addition to suitable materials?",a:["training"],
 ev:"Đoạn F: “Teachers also need <b>training</b> and suitable materials.”",exp:"Câu hỏi loại trừ sẵn <i>suitable materials</i>, nên đáp án chỉ còn một từ."}
]},

{t:"note",title:"Bài luyện phân tích đề · 5 đề bài",tag:"Writing",html:`
<p class="instr">Với mỗi đề, xác định: <b>chủ đề · dạng câu hỏi · từ giới hạn · lập trường · chức năng Body 1 · chức năng Body 2</b>.</p>
<ol style="font-size:14px;padding-left:20px">
<li style="margin-bottom:10px">Schools should spend <b>more time</b> teaching practical life skills <b>than</b> traditional academic subjects. <i>To what extent do you agree or disagree?</i><br><span style="color:var(--tx2);font-size:13px">→ Dạng: Agree/Disagree · Từ giới hạn: <i>more time … than</i> (so sánh tương quan, KHÔNG phải “có nên dạy hay không”).</span></li>
<li style="margin-bottom:10px">University education should focus on preparing students for employment <b>rather than</b> developing knowledge for its own sake. <i>To what extent do you agree or disagree?</i><br><span style="color:var(--tx2);font-size:13px">→ Từ giới hạn: <i>university</i> (không phải mọi cấp học) + <i>rather than</i>.</span></li>
<li style="margin-bottom:10px">Some people think <b>parents</b> should teach children how to become responsible members of society, while others believe <b>school</b> is the best place. <i>Discuss both views and give your opinion.</i><br><span style="color:var(--tx2);font-size:13px">→ Dạng: Discuss both views — bắt buộc có đủ 2 phía + ý kiến riêng.</span></li>
<li style="margin-bottom:10px">In many countries, students are given more homework than in the past. <i>Do the advantages of this development outweigh the disadvantages?</i><br><span style="color:var(--tx2);font-size:13px">→ Dạng: Adv/Dis — phải <b>cân đo</b>, không chỉ liệt kê.</span></li>
<li>Many young people leave school without the ability to manage money. <i>Why does this happen, and what can be done about it?</i><br><span style="color:var(--tx2);font-size:13px">→ Dạng: Problem–Solution 2 phần. Giải pháp phải khớp với nguyên nhân đã nêu.</span></li>
</ol>
<div class="model"><span class="lb">Cấu trúc gợi ý cho thesis</span>
I agree to a large extent because…, although… · While X has clear benefits, I do not believe… · Both views are understandable, but… · The main causes are…, and the most effective response would be… · This development is broadly positive, provided that…</div>`},

{t:"quiz",title:"Bài luyện thesis · Viết 5 câu",tag:"Writing",kind:"free",
instr:"Viết một câu thesis cho mỗi đề. Không chép nguyên câu khuôn. Tự kiểm tra: người đọc có nhận ra lập trường ngay không? Có trả lời đúng dạng đề không? Từ thesis này có tách được hai body với hai chức năng khác nhau không?",
items:[
{q:"Đề 1 — Practical life skills vs academic subjects (more time than)",
 model:"While practical life skills clearly deserve a larger place in the curriculum, I do not believe they should be given more time than academic subjects, since the two prepare students for different but equally necessary demands.",
 exp:"Bám đúng <i>more time … than</i>. Body 1: vì sao kỹ năng thực tiễn cần nhiều thời lượng hơn hiện nay. Body 2: vì sao vẫn không nên vượt môn học thuật."},
{q:"Đề 2 — University: employment vs knowledge for its own sake",
 model:"I agree to a large extent that universities should prepare students for employment, although this should be achieved by embedding professional application within academic disciplines rather than by narrowing what is taught.",
 exp:"Có mức độ (<i>to a large extent</i>) + điều kiện. Body 1: lợi ích của định hướng việc làm. Body 2: giới hạn — cách thực hiện."},
{q:"Đề 3 — Parents vs school teaching social responsibility",
 model:"Both views are understandable, but I believe schools carry the greater responsibility, because they reach every child equally, whereas the quality of guidance available at home varies enormously from family to family.",
 exp:"Discuss both views bắt buộc thừa nhận cả hai phía trước khi nghiêng về một bên, và lý do nghiêng phải cụ thể (tính đồng đều)."},
{q:"Đề 4 — More homework: advantages outweigh disadvantages?",
 model:"In my view the disadvantages now outweigh the advantages, since the additional workload produces only marginal gains in understanding while consistently reducing sleep, independent reading and time for family life.",
 exp:"Đề Adv/Dis cần một phán quyết rõ (<i>outweigh</i>) và tiêu chí so sánh, không phải hai danh sách."},
{q:"Đề 5 — Young people cannot manage money: causes and solutions",
 model:"This problem arises mainly because financial decisions are rarely taught in a structured way and because families differ widely in their own financial knowledge; the most effective response would be to integrate budgeting, interest and credit into existing mathematics lessons rather than to create a separate subject.",
 exp:"Dạng 2 phần: nguyên nhân + giải pháp phải <b>khớp nhau</b>. Giải pháp “tích hợp” trả lời trực tiếp nguyên nhân “không được dạy có hệ thống”."}
]},

{t:"writing",title:"Bài luyện đoạn thân bài",tag:"Writing",
prompt:"Dùng Đề bài 1. Viết đoạn văn bảo vệ quan điểm nên chú trọng hơn đến kỹ năng thực tiễn.",
instr:"Chuỗi phát triển bắt buộc: <b>Luận điểm → Cơ chế → Ví dụ → Hệ quả → Liên kết lại luận điểm</b>. Mức nền tảng 160–180 từ. Mức mở rộng 190–220 từ, thêm một giới hạn (áp lực thời khoá biểu, hoặc yêu cầu tích hợp vào môn hiện có).",
check:["Đoạn có topic sentence nêu rõ luận điểm không?","Có <b>cơ chế</b> giải thích vì sao, hay chỉ khẳng định?","Ví dụ có chứng minh được luận điểm, hay chỉ minh hoạ chung chung?","Mỗi câu có đẩy lập luận tiến thêm một bước không?"],
model:`<b>Mẫu cơ chế (sách gợi ý):</b> Financial literacy is useful because it changes the way young people evaluate everyday choices. Instead of seeing a loan only as immediate access to money, they learn to consider interest, repayment periods and long-term cost.<br><br>
<b>Đoạn mẫu đầy đủ (~205 từ):</b><br>
Schools should devote more attention to practical life skills because these skills alter the quality of decisions that every student will eventually have to make alone. The mechanism is not simply that pupils learn extra facts; it is that they acquire a framework for evaluating choices. A young person who has been taught how interest accumulates does not view a loan merely as immediate access to money, but as a commitment with a repayment period and a long-term cost. That single reframing can prevent a decade of avoidable debt. Consider a school-leaver signing a first phone contract or a rental agreement: without any classroom exposure to contracts, the only available strategy is to trust whoever is selling. The wider consequence is one of equity. Families differ enormously in their financial confidence, so leaving this education to the home guarantees that the students who most need guidance are the least likely to receive it. It should be conceded that the timetable is already crowded and that creating a new compulsory subject would displace something valuable. The stronger version of this argument is therefore integration rather than expansion: budgeting belongs inside mathematics, and professional communication inside language lessons — which is precisely why practical skills deserve more attention, not a separate empire.`},

{t:"quiz",title:"Lập trường và nhượng bộ · Kết hợp câu",tag:"Grammar",kind:"free",
instr:"Kết hợp hoặc viết lại các cặp câu sau. Sử dụng ít nhất bốn cấu trúc: <i>although · while · but · rather than · provided that · should not be prioritised at the expense of</i>.",
items:[
{q:"Practical skills are important. They should not replace academic subjects.",
 model:"Although practical skills are important, they should complement academic subjects rather than replace them.",exp:"Dùng <i>although</i> + <i>rather than</i> để giữ đúng sắc thái nhượng bộ."},
{q:"Schools have limited time. They still need to address major gaps in life knowledge.",
 model:"While the school timetable is undeniably limited, schools still need to address the most serious gaps in students’ life knowledge.",exp:"<i>While</i> tạo tương phản mà không lặp lại <i>although</i>."},
{q:"Families can teach children about money. Not every family has the same knowledge.",
 model:"Families can certainly teach children about money, but not every family has the same knowledge or confidence to do so.",exp:"Nhượng bộ trước, phản biện sau — đúng mạch của một đoạn cân bằng."},
{q:"A course may be useful today. It may become outdated quickly.",
 model:"A course may be useful today, provided that it teaches transferable principles; otherwise it risks becoming outdated within a few years.",exp:"<i>provided that</i> biến câu thành một điều kiện có giá trị lập luận."},
{q:"I support practical education. It must be integrated carefully.",
 model:"I support practical education, provided that it is integrated into existing subjects carefully; life skills should not be prioritised at the expense of intellectual depth.",exp:"Dùng cụm nâng cao <i>at the expense of</i> để nêu giới hạn."}
]},

{t:"quiz",title:"Sửa lỗi trọng điểm",tag:"Grammar",kind:"free",
instr:"Sửa lỗi về độ tự nhiên hoặc ngữ pháp.",items:[
{q:"Students can learn many knowledges from practical subjects.",model:"Students can gain a great deal of knowledge from practical subjects.",exp:"<i>knowledge</i> không đếm được; và collocation chuẩn là <i>gain/acquire knowledge</i>, không phải <i>learn knowledge</i> (lỗi dịch “học kiến thức”)."},
{q:"Schools should teach about how to manage money.",model:"Schools should teach students how to manage money.",exp:"<i>teach</i> không đi với <i>about</i> khi có mệnh đề <i>how to</i>. Thêm tân ngữ người học."},
{q:"This course brings many benefits for young people.",model:"This course offers many benefits to young people. / This course is highly beneficial to young people.",exp:"Collocation: <i>bring benefits <b>to</b></i> hoặc dùng hẳn <i>be beneficial to</i>."},
{q:"Parents do not always have enough experiences to teach this.",model:"Parents do not always have enough experience to teach this.",exp:"<i>experience</i> = kinh nghiệm → không đếm được. (<i>experiences</i> = những trải nghiệm cụ thể.)"},
{q:"It helps students to adapt with adult life.",model:"It helps students adapt to adult life.",exp:"Giới từ đúng là <i>adapt <b>to</b></i>; sau <i>help</i> có thể bỏ <i>to</i>."}
]},

{t:"vocab",title:"Cụm từ về giáo dục",tag:"Vocabulary",items:[
["a well-rounded education","nền giáo dục toàn diện","A well-rounded education combines knowledge with practical competence."],
["financial literacy","hiểu biết tài chính","Financial literacy can prevent avoidable mistakes in early adulthood."],
["an intellectual foundation","nền tảng tư duy và kiến thức","Academic subjects provide an intellectual foundation for later study."],
["transferable skills","kỹ năng có thể vận dụng rộng","Communication and problem-solving are transferable skills."],
["manage everyday responsibilities","xử lý trách nhiệm thường ngày","Schools can help students manage everyday responsibilities."],
["prepare students for adult life","chuẩn bị cho đời sống trưởng thành","Education should prepare students for adult life as well as examinations."],
["remain relevant","vẫn phù hợp","Core literacy skills remain relevant even when technology changes."],
["become outdated","trở nên lỗi thời","A course built around one software platform may become outdated."],
["integrate X into Y","tích hợp X vào Y","Schools can integrate budgeting into mathematics lessons."],
["place pressure on the timetable","gây áp lực lên thời khoá biểu","New compulsory subjects place pressure on the timetable."],
["unequal access to","chênh lệch khả năng tiếp cận","Children have unequal access to financial guidance at home."],
["apply knowledge in practice","áp dụng kiến thức vào thực tế","Students need opportunities to apply knowledge in practice."],
["learn by trial and error","học qua quá trình thử nghiệm","Many adults learn money management by trial and error."],
["serve different purposes","phục vụ các mục đích khác nhau","Academic and practical subjects serve different purposes."]
]},

{t:"speaking",title:"Speaking về giáo dục",tag:"Speaking",
instr:"Với Part 3, dùng trình tự: <b>Lập trường → Lí do → Minh hoạ cụ thể → Giới hạn → Ý kết</b>.",
parts:[
{label:"Part 1",qs:[
["What subject did you enjoy most at school?","Literature, oddly enough, because it was the only lesson where I was rewarded for having an opinion rather than a correct answer. I still notice the effect — I find it much easier to build an argument than to memorise a formula."],
["Did your school teach any practical skills?","Very few, and that's a genuine gap. We had one afternoon on first aid in five years, but nothing on contracts, budgeting or writing a professional email — all of which I needed within months of leaving."],
["Do you prefer learning from a teacher or by yourself?","A combination, really. I learn faster alone because I can set the pace, but I need a teacher to tell me what I'm doing wrong — self-study is very good at reinforcing your own blind spots."],
["Is there a skill you wish you had learned earlier?","Managing money, without question. I learned budgeting by trial and error in my first year away from home, which was an expensive way to acquire something that could have been taught in an afternoon."]
]},
{label:"Part 2 · Cue card",qs:[
["Describe a useful skill you learned outside school. — what the skill was · how you learned it · why it was difficult or useful · and explain whether schools should teach it",
"The skill I'd like to describe is basic personal budgeting, which I picked up entirely outside the classroom. I learned it in my first year of living away from home, and the method was not elegant: I simply ran out of money about ten days before the end of the month, twice in a row, and decided that this couldn't continue. So I started recording every expense in a spreadsheet, splitting them into fixed costs and things I'd chosen, and reviewing the total each Sunday. What made it difficult at first was psychological rather than mathematical — the arithmetic is trivial, but seeing exactly how much I spent on food I hadn't planned to buy was uncomfortable. The usefulness, though, was immediate. Within about two months I could predict my own spending fairly accurately, and that removed a background anxiety I hadn't even realised I was carrying. Should schools teach it? Absolutely, but integrated into mathematics rather than as a separate subject, because otherwise it just places more pressure on an already crowded timetable. And there's an equality argument too: families have very unequal access to financial guidance, so leaving it to the home reproduces existing inequalities."]
]},
{label:"Part 3",qs:[
["What practical skills should all teenagers learn?","I'd prioritise three: managing money, basic cooking and formal communication. The reason I'd choose those is that they're all high-frequency — you use them weekly for the rest of your life — and all three are quietly assumed by adult institutions. A bank assumes you understand interest; an employer assumes you can write a coherent email. The limitation is that specific procedures date quickly, so schools should teach the underlying principles rather than a particular tax form."],
["Are academic subjects becoming less important?","I'd say no, though the way we justify them is changing. Mathematics and scientific reasoning remain relevant precisely because they transfer across situations that nobody can predict. What's declining is the assumption that knowledge justifies itself without explanation — students now expect to be shown why it matters outside an examination room, and honestly that's a fair demand."],
["Who should be more responsible for life skills, schools or families?","Ideally both, but if I have to choose, schools — for reasons of equity rather than expertise. Families vary enormously in time, confidence and experience, so leaving it to the home guarantees uneven preparation. That said, schools can't replicate everything: habits around money are formed by watching adults, and no curriculum reaches that."],
["How can teachers make theoretical subjects feel more relevant?","By embedding the application inside the concept rather than attaching it afterwards. A percentage lesson that ends with a loan calculation feels artificial; a lesson built around comparing two loan offers teaches the same percentage. The distinction matters because students detect decoration instantly, and once they do, the relevance argument loses credibility."]
]}
]},

{t:"note",title:"Sản phẩm cần nộp — Ngày 2",tag:"Checklist",html:`
<ul class="tips checklist">
<li>Năm đề bài đã được phân tích (chủ đề, dạng, từ giới hạn, lập trường, chức năng 2 body)</li>
<li>Năm câu thesis</li>
<li>Một đoạn thân bài</li>
<li>Một lượt sửa ngữ pháp có trọng tâm — chọn <b>một lỗi lặp lại</b>, sửa toàn bộ, rồi viết 3 câu mới bằng cấu trúc đúng</li>
<li>Một bản ghi âm hoặc lượt luyện Speaking</li>
</ul>`}
]}
;
