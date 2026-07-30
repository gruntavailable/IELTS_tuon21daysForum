const TF = ["TRUE","FALSE","NOT GIVEN"];
const HEADINGS = [
  "I. The social learning that efficiency may remove",
  "II. Why affordable software automatically creates equality",
  "III. The difference between adjustment and genuine diagnosis",
  "IV. A historical account of classroom sizes",
  "V. Ways to reduce unreliable output",
  "VI. The danger of confident but inaccurate explanations",
  "VII. Conditions that influence whether access is meaningful",
  "VIII. The emotional advantages of private tutoring"
];
export default
{
id:19, title:"Ngày 19 — Một chủ đề, ba kỹ năng",
focus:"Kiểm tra khả năng chuyển ý tưởng và ngôn ngữ giữa Reading, Writing và Speaking. Cùng một chủ đề, giữ nội dung nhưng đổi mức độ trang trọng và độ dài câu theo từng kỹ năng.",
blocks:[

{t:"note",title:"Định hướng học tập",tag:"Hướng dẫn",html:`
<p>Cùng một chủ đề, người học sẽ rút ra <b>cơ chế</b> từ bài đọc, phát triển cơ chế ấy thành lập luận viết và diễn đạt lại bằng ngôn ngữ nói tự nhiên. Nội dung chính được giữ, còn mức độ trang trọng, độ dài câu và cách đưa ví dụ phải thay đổi theo kỹ năng. Khả năng điều chỉnh như vậy cho thấy người học đã thực sự <b>sở hữu</b> ngôn ngữ, chứ chưa dừng ở ghi nhớ một câu mẫu.</p>
<p class="instr">Chủ đề trong ngày: <b>AI tutors in education</b>. Sản phẩm chính: một bộ bài vận dụng hoàn chỉnh, trong đó cùng một hệ ý được triển khai ở Reading, Writing và Speaking nhưng có cách diễn đạt phù hợp với từng kỹ năng.</p>
<div class="model" style="margin-top:12px"><span class="lb">Mục tiêu</span>
Reading cung cấp kiến thức và góc nhìn · Writing yêu cầu tổ chức lập luận · Speaking yêu cầu diễn đạt cùng nội dung bằng ngôn ngữ nói tự nhiên. <b>Một chủ đề được vận dụng theo ba cách khác nhau.</b></div>`},

{t:"note",title:"Tổng quan trong ngày",tag:"Nhịp học",html:`
<div class="tablewrap"><table class="vt">
<tr><th>Nhịp học</th><th>Nội dung</th></tr>
<tr><td class="ph">60 phút</td><td>Đọc các đoạn A–F, làm câu 1–8, viết một đoạn thân bài Task 2 và ghi âm hai câu trả lời Part 3.</td></tr>
<tr><td class="ph">90 phút</td><td>Hoàn thành bộ câu hỏi Reading, lập dàn ý đầy đủ, viết một đoạn có bấm giờ và trả lời sáu câu Speaking.</td></tr>
<tr><td class="ph">150 phút</td><td>Hoàn thành toàn bộ nội dung, viết một bài đầy đủ trong 40 phút, chép lời một câu Part 3 và lập ngân hàng gồm 24 cụm từ có thể vận dụng.</td></tr>
</table></div>`},

{t:"note",title:"Nguyên tắc chuyển giao",tag:"Lý thuyết",html:`
<p class="instr">Người học <b>không</b> chuyển nguyên câu từ Reading sang Writing hoặc Speaking. Hãy quan sát cùng một ý được đổi hình dạng ba lần:</p>
<div class="tablewrap"><table class="vt">
<tr><th>Kỹ năng</th><th>Cách diễn đạt</th></tr>
<tr><td class="ph">Reading</td><td class="ex">Adaptive systems can identify recurring errors and adjust the level of subsequent practice.</td></tr>
<tr><td class="ph">Writing</td><td class="ex">AI tutors can make practice more responsive by detecting repeated weaknesses and selecting tasks that address them directly.</td></tr>
<tr><td class="ph">Speaking</td><td class="ex">One useful thing is that the system can notice the mistakes you keep making and give you more practice in that exact area.</td></tr>
</table></div>
<div class="model" style="margin-top:12px"><span class="lb">Quy tắc</span>
Nội dung chính được giữ, còn <b>mức độ trang trọng, độ dài câu và mật độ thông tin</b> cần được điều chỉnh theo từng kỹ năng. Viết lại theo chức năng giúp người học tránh sao chép và cho thấy khả năng sử dụng ngôn ngữ linh hoạt.</div>`},

{t:"passage",title:"Bài đọc 19",subtitle:"AI Tutors — Support or Substitute?",paras:[
["A","The idea of a machine that can teach is older than the current excitement around artificial intelligence. Early educational software presented fixed explanations and marked simple answers. Its role was limited because every path had to be predicted by a human designer. Recent systems appear more flexible. They can generate examples, respond to questions in ordinary language and adapt practice according to a learner’s previous performance. This has led some commentators to imagine a future in which every student has access to a patient personal tutor."],
["B","The attraction is understandable. In a classroom of forty students, one teacher cannot continuously diagnose every individual misunderstanding. A student who is confused by fractions, paragraph development or verb tense may remain quiet because asking for help feels embarrassing. An AI tutor can offer immediate explanation without displaying impatience. It can also provide several versions of the same explanation and allow the learner to repeat a task privately."],
["C","Personalisation, however, is often described too loosely. A system may adjust difficulty after a correct or incorrect answer, but genuine teaching requires more than moving a learner up or down a ladder. A wrong answer can come from a gap in knowledge, a careless reading, anxiety, unclear instructions or a deeper misconception. Unless the system identifies the real cause, personalised practice may become nothing more than efficiently repeating the wrong kind of exercise."],
["D","Accuracy is another concern. Generative systems can produce fluent explanations that contain factual errors, invented sources or reasoning that sounds plausible but is weak. This is especially dangerous for inexperienced learners, who may lack the knowledge needed to recognise a confident mistake. A teacher can also be wrong, but schools normally have professional standards, curriculum controls and clear lines of responsibility. When an automated explanation causes harm, accountability may be divided among the school, software provider and user."],
["E","Supporters argue that these weaknesses can be reduced through careful design. An educational system does not need unrestricted access to every possible answer. It can be connected to approved materials, required to show sources and programmed to admit uncertainty. Teachers can review the types of questions students ask and intervene when the pattern suggests a persistent misunderstanding. In this model, AI provides frequent low-stakes support while human professionals retain control over curriculum and judgment."],
["F","The distribution of technology also matters. Personal tutoring has traditionally been available mainly to families who can pay for it. Low-cost digital support could widen access for learners in remote areas or schools with limited specialist staff. Yet access to a device is not the same as access to effective learning. Students also need reliable internet, a quiet space, basic digital literacy and enough self-discipline to continue when no adult is watching. A tool introduced in the name of equality may widen differences if advantaged students are better able to use it."],
["G","Education is not only the transfer of information. Teachers notice changes in mood, build classroom trust, manage disagreement and decide when a learner needs encouragement rather than another explanation. Students also learn by listening to questions from classmates and discovering that other people approach a problem differently. An individual AI conversation may be efficient, but efficiency can remove the social friction through which patience, communication and intellectual humility develop."],
["H","There is also a risk that schools use AI to solve a staffing problem created by underinvestment. If technology is introduced as an additional resource, it may reduce routine workload and give teachers more time for complex feedback. If it becomes a reason to increase class sizes or replace trained staff, the same tool could weaken education. The result depends less on whether AI is inherently good or bad than on the institutional decisions surrounding it."],
["I","The most realistic future is therefore neither total replacement nor complete rejection. AI tutors are likely to become one layer of educational support: useful for practice, explanation and rapid feedback, but limited in judgment, emotional understanding and responsibility. Schools should evaluate them by asking not simply whether students enjoy the technology, but whether it improves learning, for whom it works, what errors it introduces and what human contact may be lost."]
]},

{t:"quiz",title:"Questions 1–5 · Matching Headings",tag:"Reading",col:true,
instr:"Chọn heading đúng cho các đoạn C–G. Có nhiều heading hơn số đoạn.",
shared:HEADINGS,start:1,items:[
{q:"Paragraph C",a:2,
 ev:"Đoạn C: “A system may adjust difficulty after a correct or incorrect answer, but genuine teaching requires more than moving a learner up or down a ladder.”",
 exp:"Đoạn đối lập <i>adjust difficulty</i> (điều chỉnh) với <i>identify the real cause</i> (chẩn đoán thật) → III."},
{q:"Paragraph D",a:5,
 ev:"Đoạn D: “Generative systems can produce fluent explanations that contain factual errors… learners may lack the knowledge needed to recognise a confident mistake.”",
 exp:"<i>fluent but wrong</i> + <i>confident mistake</i> ↔ <i>confident but inaccurate explanations</i> → VI."},
{q:"Paragraph E",a:4,
 ev:"Đoạn E: “It can be connected to approved materials, required to show sources and programmed to admit uncertainty.”",
 exp:"Cả đoạn liệt kê <b>biện pháp thiết kế</b> để giảm đầu ra thiếu tin cậy → V."},
{q:"Paragraph F",a:6,
 ev:"Đoạn F: “Yet access to a device is not the same as access to effective learning. Students also need reliable internet, a quiet space, basic digital literacy…”",
 exp:"Đoạn nêu các <b>điều kiện</b> khiến quyền tiếp cận có thực chất hay không → VII. Bẫy II (<i>automatically creates equality</i>) TRÁI NGƯỢC với câu cuối đoạn."},
{q:"Paragraph G",a:0,
 ev:"Đoạn G: “…efficiency can remove the social friction through which patience, communication and intellectual humility develop.”",
 exp:"<i>efficiency can remove the social friction</i> khớp gần nguyên văn → I."}
]},

{t:"quiz",title:"Questions 6–10 · True / False / Not Given",tag:"Reading",
instr:"TRUE nếu nhận định phù hợp với bài đọc, FALSE nếu trái với bài đọc, NOT GIVEN nếu bài không cung cấp đủ thông tin.",
shared:TF,start:6,items:[
{q:"Early educational software could choose from paths that had not been planned by designers.",a:1,
 ev:"Đoạn A: “Its role was limited because every path had to be predicted by a human designer.”",
 exp:"Bài nói <b>mọi</b> lối đi đều phải được người thiết kế dự đoán trước → nhận định ngược lại hoàn toàn."},
{q:"Some students may avoid asking questions because they feel embarrassed.",a:0,
 ev:"Đoạn B: “A student… may remain quiet because asking for help feels embarrassing.”",
 exp:"Paraphrase trực tiếp: <i>remain quiet</i> ↔ <i>avoid asking questions</i>."},
{q:"The passage claims that AI systems are more likely to make errors than teachers.",a:2,
 ev:"Đoạn D: “A teacher can also be wrong, but schools normally have professional standards, curriculum controls and clear lines of responsibility.”",
 exp:"Bài chỉ so sánh <b>cơ chế chịu trách nhiệm</b>, không hề so sánh <b>tần suất</b> sai. Không đủ thông tin → NOT GIVEN. Đây là bẫy rất tinh vi."},
{q:"Approved source material can be used to limit the information an educational system produces.",a:0,
 ev:"Đoạn E: “It can be connected to approved materials, required to show sources…”",
 exp:"<i>does not need unrestricted access</i> + <i>connected to approved materials</i> ↔ ý “giới hạn thông tin” → TRUE."},
{q:"Most students in remote areas already have a quiet place to study.",a:2,
 ev:"Đoạn F: “Students also need reliable internet, a quiet space, basic digital literacy…”",
 exp:"Bài nêu <i>quiet space</i> là <b>điều kiện cần</b>, nhưng không nói bao nhiêu học sinh vùng xa đang có. Không có số liệu → NOT GIVEN."}
]},

{t:"gap",title:"Questions 11–14 · Sentence Completion",tag:"Reading",start:11,
instr:"Hoàn thành câu bằng KHÔNG QUÁ BA TỪ lấy từ bài đọc.",items:[
{q:"Schools normally have professional standards, curriculum controls and clear lines of ______.",a:["responsibility"],
 ev:"Đoạn D: “…schools normally have professional standards, curriculum controls and clear lines of responsibility.”",
 exp:"Danh sách ba thành phần giữ nguyên trật tự — chỉ cần từ cuối. Đừng nhầm sang <i>accountability</i> ở câu sau."},
{q:"Students need basic ______ as well as a device and internet connection.",a:["digital literacy","literacy"],
 ev:"Đoạn F: “Students also need reliable internet, a quiet space, basic digital literacy…”",
 exp:"Cụm cố định <i>basic digital literacy</i>. Vì câu đã có <i>basic</i>, phần điền là <b>digital literacy</b>."},
{q:"Classroom interaction can help learners develop communication and intellectual ______.",a:["humility"],
 ev:"Đoạn G: “…patience, communication and intellectual humility develop.”",
 exp:"Lại là danh sách ba thành phần; câu hỏi lấy hai từ đầu, cần điền từ cuối."},
{q:"AI may give teachers more time for ______ feedback.",a:["complex"],
 ev:"Đoạn H: “…it may reduce routine workload and give teachers more time for complex feedback.”",
 exp:"Cặp đối lập trong đoạn: <i>routine</i> (việc AI làm) ↔ <i>complex</i> (việc giáo viên làm)."}
]},

{t:"note",title:"Bảng rà soát Reading",tag:"Checklist",html:`
<p class="instr">Bảng rà soát cần ghi <b>cả đáp án đúng và đường đi đến đáp án</b>. Với câu sai hoặc đoán, người học xác định từ khoá định vị, paraphrase tương ứng và quy tắc logic đã bị bỏ qua.</p>
<div class="tablewrap"><table class="vt">
<tr><th>Câu</th><th>Đáp án của tôi</th><th>Đáp án đúng</th><th>Đoạn chứa bằng chứng</th><th>Cặp diễn đạt tương đương</th><th>Mã lỗi</th></tr>
<tr><td class="ph">1</td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td class="ph">…</td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td class="ph">14</td><td></td><td></td><td></td><td></td><td></td></tr>
</table></div>
<div class="model" style="margin-top:10px"><span class="lb">Mã lỗi gợi ý</span>
<b>EXT</b> — bỏ qua từ tuyệt đối (all/never/only) · <b>NG</b> — nhầm FALSE với NOT GIVEN · <b>PAR</b> — không nhận ra paraphrase · <b>LIM</b> — vượt giới hạn số từ · <b>SPD</b> — đọc đúng bằng chứng nhưng chọn quá nhanh</div>`},

{t:"note",title:"Sơ đồ ý trước khi viết",tag:"Writing",html:`
<div class="model"><span class="lb">Câu hỏi chủ đề</span>
Some people believe that artificial intelligence will eventually replace teachers in schools. To what extent do you agree or disagree?</div>

<h4 style="margin-top:14px">Bước 1 — Phân tích đề</h4>
<ul class="tips">
<li>Chủ đề: ______</li>
<li>Dạng câu hỏi: ______</li>
<li>Từ giới hạn: <b>eventually replace</b></li>
<li>Mức độ đồng ý của tôi: ______</li>
<li>“Replace” thực sự có nghĩa là gì? ______</li>
<li>Hỗ trợ và thay thế khác nhau ở điểm nào? ______</li>
</ul>

<h4 style="margin-top:14px">Bước 2 — Chức năng hai đoạn thân bài</h4>
<div class="tablewrap"><table class="vt">
<tr><th>Đoạn 1 — Khả năng của AI</th><th>Đoạn 2 — Vai trò của con người</th></tr>
<tr><td>repetitive practice<br>immediate feedback<br>private explanation<br>adaptation to recurring errors<br>wider access</td>
    <td>diagnosis beyond right/wrong<br>emotional judgment<br>classroom relationships<br>ethical responsibility<br>social learning</td></tr>
<tr><td class="ex"><b>Mechanism chain:</b><br>feature → learner behaviour → educational result → limitation</td>
    <td class="ex"><b>Mechanism chain:</b><br>human function → why software struggles → consequence of removal → position</td></tr>
</table></div>`},

{t:"quiz",title:"Bài luyện câu luận đề · Ba phiên bản",tag:"Writing",kind:"free",
instr:"Viết ba phiên bản thesis cho cùng một đề. Mục đích là thấy rõ lập trường có thể được đặt ở nhiều mức độ khác nhau — và mức độ nào bạn thực sự bảo vệ được.",items:[
{q:"1 · Direct disagreement (phản đối thẳng)",
 model:"I disagree that artificial intelligence will replace teachers, because the functions it performs well are precisely the ones that matter least in a classroom.",
 exp:"Lập trường mạnh, dễ giữ nhất quán. Rủi ro: phải bác được <b>mọi</b> khả năng thay thế, nên cần chọn lý do đủ rộng."},
{q:"2 · Partial agreement with conditions (đồng ý có điều kiện)",
 model:"AI is likely to replace certain teaching tasks, such as routine marking and repetitive practice, but it will not replace teachers themselves unless schools redefine teaching as the delivery of information alone.",
 exp:"Kỹ thuật quan trọng: tách <b>task</b> khỏi <b>role</b>. Mệnh đề <i>unless</i> cho phép nhượng bộ mà không mất lập trường."},
{q:"3 · Support-versus-replacement distinction (phân biệt hỗ trợ và thay thế)",
 model:"The debate confuses two different claims: that AI will become a powerful form of educational support, which seems very likely, and that it will substitute for teachers, which does not follow from the first.",
 exp:"Cách mở bài mạnh nhất cho dạng đề này vì nó <b>định nghĩa lại vấn đề</b> thay vì chỉ chọn phe. Rất hợp band 7+."}
]},

{t:"writing",title:"Bài Writing Task 2",tag:"Writing",
prompt:"Some people believe that artificial intelligence will eventually replace teachers in schools.<br><br>To what extent do you agree or disagree?<br><br><i>Write at least 250 words. Gợi ý thời gian: 8 phút lập dàn ý · 32 phút viết · 5 phút rà soát.</i>",
instr:"Phần mở bài cần trả lời đúng quan hệ <b>“support or replace”</b> trong đề. Kiểm tra xem thesis đã thể hiện rõ <b>mức độ thay thế</b> hay mới chỉ nêu nhận xét chung rằng AI hữu ích. Mở bài chỉ làm <b>hai việc</b>: nêu tranh luận và nêu lập trường chính xác.",
check:["Thesis trả lời đúng chữ <b>replace</b>, không dừng ở “AI is useful”","Mỗi đoạn thân bài có <b>Claim → Mechanism → Example → Limitation → Link back</b>","Không mở bài bằng “In this day and age… heated debate”","Có ít nhất một nhượng bộ thật sự","Kết luận không đưa thêm ý mới"],
model:`<div class="model" style="margin-bottom:12px"><span class="lb">Tránh viết</span>
<i>In this day and age, artificial intelligence is becoming more and more popular all over the world and this controversial issue has sparked heated debate.</i><br><br>
<span class="lb">Thay bằng</span>
AI can already explain concepts and generate personalised practice, but these functions do not amount to replacing a teacher. I therefore disagree that schools will or should remove human educators, although AI is likely to become a powerful form of support.</div>

<b>Bài mẫu tham khảo (~290 từ):</b><br>
AI can already explain concepts and generate personalised practice, but these functions do not amount to replacing a teacher. I therefore disagree that schools will or should remove human educators, although AI is likely to become a powerful form of support.<br><br>
The case for replacement rests on genuine capabilities. An automated tutor can deliver immediate feedback, repeat an explanation without impatience and adjust the difficulty of practice according to a learner's previous answers. The mechanism matters here: because the system responds instantly and privately, a student who would never raise a hand in a class of forty can still resolve a misunderstanding on the same day it appears. In a school with few specialist staff, that availability is not trivial. However, this capability has a clear boundary. Adjusting difficulty after a wrong answer is not the same as knowing why the answer was wrong, and a system that misreads anxiety as a knowledge gap will simply deliver more of the wrong exercise.<br><br>
The stronger objection concerns what teaching actually involves. A teacher decides when a learner needs encouragement rather than another explanation, notices that a normally confident student has gone quiet, and carries professional responsibility when something goes wrong. These judgments depend on reading a person, not a performance record. Students also learn from one another — hearing a classmate ask the question they were too embarrassed to ask is itself instructive. An efficient private conversation with software removes exactly this social friction, through which patience and intellectual humility develop.<br><br>
In my view, then, AI will replace a set of <i>tasks</i> — routine marking, drill practice, first-line explanation — rather than the role of the teacher. The decisive factor will not be the technology's capability but whether schools treat it as an additional resource or as a justification for employing fewer trained staff.`},

{t:"note",title:"Khung phát triển đoạn thân bài",tag:"Writing",html:`
<div class="tablewrap"><table class="vt">
<tr><th>Paragraph 1</th><th>Paragraph 2</th></tr>
<tr><td class="ph">Claim:</td><td class="ph">Claim:</td></tr>
<tr><td class="ph">Mechanism:</td><td class="ph">Mechanism:</td></tr>
<tr><td class="ph">Example:</td><td class="ph">Example:</td></tr>
<tr><td class="ph">Boundary or limitation:</td><td class="ph">Wider implication:</td></tr>
<tr><td class="ph">Link back:</td><td class="ph">Link back:</td></tr>
</table></div>
<p class="instr">Điền khung <b>trước</b> khi viết. Nếu một ô để trống, đoạn văn sẽ thiếu đúng chức năng đó — đây là cách phát hiện lỗi sớm nhất.</p>`},

{t:"writing",title:"Đoạn vận dụng trong 12 phút",tag:"Writing",
prompt:"AI tutors may improve educational access, but access to technology does not always create equal learning opportunities. Explain why.",
instr:"Viết 170–210 từ trong <b>12 phút</b>. Đây là bài kiểm tra chuyển giao: dùng lại cơ chế từ đoạn F của bài đọc nhưng <b>không sao chép câu</b>.",
check:["Phân biệt rõ <b>access to a device</b> và <b>access to learning</b>","Nêu ít nhất ba điều kiện ngoài thiết bị","Có một ví dụ cụ thể","Câu cuối nêu hệ quả chính sách, không lặp lại câu đầu"],
model:`<b>Bài mẫu tham khảo (~195 từ):</b><br>
Digital tutoring is often presented as a way of equalising education, since a low-cost application can reach a learner in a remote district as easily as one in a capital city. The difficulty is that possessing a device and benefiting from it are two different things. Effective independent study also requires a reliable connection, a quiet place to work, enough digital literacy to use the tool properly, and the self-discipline to continue when no adult is supervising. Each of these is distributed unequally, and they tend to be distributed in the same direction as existing advantage.<br><br>
The consequence is uncomfortable. A student with a private room, fast internet and educated parents can use an AI tutor to extend an already strong position, whereas a student sharing a room in a household with intermittent connectivity may use the same tool sporadically and give up. The technology is identical; the outcome diverges. A tool introduced in the name of equality can therefore widen the gap it was meant to close.<br><br>
This does not argue against providing the technology. It argues that provision alone is not a policy, and that access should be measured by what learners can actually do with a tool rather than by how many of them received one.`},

{t:"speaking",title:"Bài luyện Speaking",tag:"Speaking",
instr:"Part 1 trả lời trong <b>20–30 giây</b> mỗi câu. Part 3 ghi âm cả sáu câu, thời lượng mục tiêu <b>40–60 giây</b> mỗi câu, theo cấu trúc: <b>Position → mechanism → example → limitation → wider thought</b>.",
parts:[
{label:"Part 1 · Technology and learning",qs:[
["Do you often use technology when you study?","I mainly use it for looking things up and for keeping my notes in one place. I've deliberately kept it fairly limited, though, because I found that having six tabs open made me feel busy without actually learning much."],
["Is there an app that has helped you learn something?","Yes, a spaced-repetition app for vocabulary. It's useful when I'm consistent with it, but the moment I skip a few days the backlog becomes discouraging. So I'd say the app works — it just doesn't solve the discipline problem for me."],
["Do you prefer asking a teacher or searching for an answer yourself?","I'd usually search first, mostly out of habit. But I would still rather ask a teacher when I don't understand <i>why</i> something is wrong, because a search gives me the correct answer without telling me which assumption of mine was faulty."],
["Did your school use much educational technology?","Not a great deal, and what we had was used fairly superficially — slides instead of a whiteboard, essentially. The problem is that I can easily confuse using a device with changing how something is taught, and I think our school made that confusion too."],
["Is it easy for you to stay focused when studying online?","Honestly, no. The same device holds the lesson and every possible distraction, so the effort of staying on task is constant. I tend to use it as a backup rather than as my main study method for that reason."]
]},
{label:"Part 2 · Cue card",qs:[
["Describe a piece of technology that helped you learn something. — what it was · what you learned with it · how you used it · and explain why it was useful or limited",
"I'd like to talk about a speech-recording application I started using when I was trying to improve my spoken English. It's a very simple tool — it just records and plays back — but it changed how I practised more than any course I'd taken. What I learned with it was mainly about my own speech rather than about English as such. I would answer a question for two minutes, then listen to the recording with a notebook, and the difference between what I thought I'd said and what I actually said was genuinely uncomfortable. There was one specific moment I remember clearly: I had always assumed my main problem was vocabulary, but the recording showed that I was dropping the ends of words and pausing in the middle of clauses rather than between them. Neither of those had anything to do with how many words I knew. So I used it roughly three times a week, always on a new question, and kept the recordings so I could compare across weeks. The limitation is that it diagnoses without teaching — it shows you the problem very clearly but offers no repair. I still needed a teacher to explain why my clause boundaries were collapsing. That's why I'd describe it as useful precisely because it was narrow: it did one thing honestly, and left the interpretation to me."]
]},
{label:"Part 3 · AI and education",qs:[
["What kinds of learning tasks can technology handle well?","It handles anything with a clear correct answer particularly well — vocabulary drilling, grammar exercises, basic calculation. The mechanism is that these tasks need frequent repetition and instant marking, which is exactly what software is good at and exactly what a teacher with forty students cannot provide individually. Where it struggles is any task where the interesting part is <i>why</i> an answer is wrong, because that usually requires understanding the student rather than the answer."],
["Why do some students learn better with a human teacher?","Partly because a teacher diagnoses causes rather than symptoms. If I get a question wrong, that could be a knowledge gap, a careless reading, or simply anxiety — and those need completely different responses. A good teacher reads which one it is from how I'm behaving, not just from the answer sheet. There's also the relationship element: people work harder for someone whose opinion they care about, which sounds unscientific but is quite consistently observed."],
["Could AI reduce educational inequality?","It could, but I'm cautious about assuming it will. Low-cost software genuinely can reach places where specialist teachers don't exist, so the potential is real. The problem is that using it well requires a quiet room, reliable internet and the discipline to continue unsupervised — and those things follow existing advantage. So the same tool can widen the gap it was meant to close, which means the outcome depends on what's provided alongside the device."],
["Should schools allow students to use generative AI for homework?","I'd say yes, but with the purpose of the homework made explicit. If a task exists to produce a finished essay, AI destroys it; if it exists to develop the student's thinking, AI can support it. The sensible approach is probably to change what's assessed — asking students to explain their reasoning or defend a draft orally — rather than trying to police a tool that's freely available."],
["How might the role of teachers change in the future?","I'd expect the routine parts to shrink considerably — first-line explanation, marking, drill design. What would remain, and probably expand, is the judgment work: deciding what a particular student needs, managing a group, and taking responsibility for decisions. Whether that's an improvement depends entirely on whether schools use the freed time for that work or simply increase class sizes."],
["What risks arise when schools depend too heavily on technology?","The one I'd emphasise is that dependence tends to be justified financially rather than educationally. If technology is added as a resource, it helps; if it becomes a reason to employ fewer trained staff, the same tool weakens the system. There's also a subtler risk around confident errors — an inexperienced learner often can't tell a fluent wrong explanation from a correct one, so unsupervised use can install misconceptions very efficiently."]
]}
]},

{t:"note",title:"Sửa bản chép lời",tag:"Speaking",html:`
<p class="instr">Chép lại <b>một</b> câu trả lời Part 3 và đánh dấu theo bộ mã sau. Sau đó viết lại thành <b>tiếng Anh nói</b>, không phải tiếng Anh viết.</p>
<div class="tablewrap"><table class="vt">
<tr><th>Mã</th><th>Nội dung cần tìm</th></tr>
<tr><td class="ph">[VAGUE]</td><td>thing, stuff, good, bad, useful</td></tr>
<tr><td class="ph">[LOGIC]</td><td>claim without mechanism — khẳng định mà không giải thích cơ chế</td></tr>
<tr><td class="ph">[GRAM]</td><td>sentence that collapses after a pause — câu vỡ cấu trúc sau khi ngập ngừng</td></tr>
<tr><td class="ph">[REG]</td><td>language that sounds like an essay — nghe như đọc bài luận</td></tr>
<tr><td class="ph">[PRON]</td><td>final sound or word stress — mất âm cuối hoặc sai trọng âm</td></tr>
<tr><td class="ph">[REPEAT]</td><td>repeated phrase — cụm bị lặp</td></tr>
</table></div>`},

{t:"vocab",title:"Cụm từ cho ba kỹ năng · 24 phrase transfer bank",tag:"Vocabulary",
instr:"Mỗi cụm cần được vận dụng qua <b>ba hình thức</b>: nhận ra trong Reading, dùng trong câu học thuật ở Writing và diễn đạt tự nhiên hơn trong Speaking. Cột giữa ghi <b>Writing → Speaking</b> để bạn thấy rõ khoảng cách văn phong.",
items:[
["personalised support","hỗ trợ cá nhân hoá · Speaking: <i>help that fits the learner</i>","AI can provide personalised support at a scale a single teacher cannot match."],
["a recurring error pattern","lỗi lặp lại · Speaking: <i>a mistake I keep making</i>","The system detects a recurring error pattern rather than isolated slips."],
["immediate feedback","phản hồi ngay · Speaking: <i>feedback straight away</i>","Immediate feedback prevents a misunderstanding from becoming automatic."],
["identify the underlying misconception","xác định hiểu lầm gốc · Speaking: <i>work out why the student is wrong</i>","Genuine teaching must identify the underlying misconception, not simply mark the answer."],
["approved source material","nguồn đã kiểm duyệt · Speaking: <i>trusted course content</i>","Connecting the tutor to approved source material reduces invented explanations."],
["acknowledge uncertainty","thừa nhận không chắc · Speaking: <i>say when it is not sure</i>","A well-designed system is programmed to acknowledge uncertainty."],
["retain professional oversight","giữ giám sát chuyên môn · Speaking: <i>keep a teacher in control</i>","Human professionals should retain professional oversight of curriculum and judgment."],
["expand educational access","mở rộng tiếp cận · Speaking: <i>reach more learners</i>","Low-cost tools may expand educational access in under-served regions."],
["widen existing inequalities","làm bất bình đẳng lớn hơn · Speaking: <i>help stronger students more</i>","A tool introduced for equality can widen existing inequalities."],
["digital literacy","năng lực số · Speaking: <i>knowing how to use tools wisely</i>","Digital literacy determines whether a device becomes a learning resource."],
["self-directed learning","tự học có định hướng · Speaking: <i>study without someone watching</i>","Self-directed learning requires discipline that not every student has developed."],
["respond to emotional cues","nhận biết tín hiệu cảm xúc · Speaking: <i>notice when a student is upset</i>","Teachers respond to emotional cues that no performance record contains."],
["peer interaction","tương tác bạn học · Speaking: <i>learning from classmates</i>","Peer interaction teaches students that problems can be approached differently."],
["clear accountability","trách nhiệm rõ ràng · Speaking: <i>knowing who is responsible</i>","Automated advice complicates clear accountability when harm occurs."],
["automate routine feedback","tự động hoá phản hồi lặp lại · Speaking: <i>handle repetitive checking</i>","Software can automate routine feedback and free time for complex marking."],
["professional judgment","phán đoán chuyên môn · Speaking: <i>a teacher’s real judgment</i>","Professional judgment remains the least automatable part of teaching."],
["substitute technology for trained staff","thay nhân sự bằng công nghệ · Speaking: <i>use software instead of teachers</i>","Schools should not substitute technology for trained staff to reduce costs."],
["reduce administrative workload","giảm việc hành chính · Speaking: <i>save teachers routine work</i>","Used well, AI can reduce administrative workload considerably."],
["context-dependent","tuỳ bối cảnh · Speaking: <i>it depends on how it is used</i>","The impact of educational technology is strongly context-dependent."],
["measurable learning outcomes","kết quả học đo được · Speaking: <i>proof that students actually improve</i>","Schools should evaluate tools against measurable learning outcomes, not enjoyment."],
["a plausible but inaccurate answer","câu nghe hợp lý nhưng sai · Speaking: <i>an answer that sounds right but is wrong</i>","Inexperienced learners struggle to detect a plausible but inaccurate answer."],
["protect student data","bảo vệ dữ liệu học sinh · Speaking: <i>keep students’ information safe</i>","Any classroom system must protect student data by default."],
["over-reliance on technology","phụ thuộc quá mức · Speaking: <i>depending on it too much</i>","Over-reliance on technology can weaken independent reasoning."],
["human-led, technology-supported learning","người dạy dẫn dắt, công nghệ hỗ trợ · Speaking: <i>teachers lead and AI helps</i>","The realistic model is human-led, technology-supported learning."]
]},

{t:"note",title:"Tự nhớ lại",tag:"Vocabulary",html:`
<p class="instr">Che cột tiếng Anh và tái tạo <b>mười hai</b> cụm từ. Nhận ra khi nhìn bảng chưa chứng minh khả năng dùng chủ động.</p>
<ul class="tips">
<li>Bốn cụm dùng trong <b>Writing</b></li>
<li>Bốn cụm dùng trong <b>Speaking</b></li>
<li>Bốn cụm dùng trong <b>Reading paraphrase log</b></li>
</ul>`},

{t:"quiz",title:"Ngữ pháp · A. Giới hạn nhận định về tương lai",tag:"Grammar",kind:"free",
instr:"Các câu sau quá chắc chắn. Viết lại bằng ngôn ngữ có <b>hedging</b>, giữ ý nhưng hạ mức khẳng định.",items:[
{q:"Every student will learn better with AI.",
 model:"Many students are likely to benefit from AI, although the effect will depend on how it is used.",
 exp:"Hai thao tác: bỏ <i>every</i> (tuyệt đối) và thay <i>will</i> bằng <i>is likely to</i>. Thêm mệnh đề điều kiện để nêu giới hạn."},
{q:"AI makes education equal.",
 model:"AI may expand access to education, but it does not automatically produce equal outcomes.",
 exp:"Tách <b>access</b> khỏi <b>outcome</b> — đây chính là cơ chế ở đoạn F. Dùng <i>may</i> + mệnh đề đối lập."},
{q:"Teachers cannot compete with technology.",
 model:"Technology outperforms teachers on certain tasks, such as instant marking, but the comparison is misleading because the two do different work.",
 exp:"Thay khẳng định tuyệt đối bằng <b>phạm vi cụ thể</b> (<i>on certain tasks</i>), rồi chỉ ra lỗi của chính phép so sánh."},
{q:"Schools that use AI get higher results.",
 model:"Schools using AI may achieve better results, though the evidence is mixed and other factors are difficult to separate.",
 exp:"Nhận định nhân quả cần hedging kép: <i>may</i> + thừa nhận biến gây nhiễu (<i>other factors</i>)."},
{q:"Students become lazy when they use AI.",
 model:"Some students may rely on AI instead of attempting a task themselves, particularly when the purpose of the task is unclear to them.",
 exp:"Thay nhãn đạo đức (<i>lazy</i>) bằng <b>mô tả hành vi</b> + điều kiện. Đây là cách viết học thuật hơn hẳn."}
]},

{t:"quiz",title:"Ngữ pháp · B. Nhượng bộ và duy trì lập trường",tag:"Grammar",kind:"free",
instr:"Hoàn thành câu sao cho vế nhượng bộ <b>không</b> làm mất lập trường. Vế sau dấu phẩy phải mạnh hơn vế trước.",items:[
{q:"Although AI can provide immediate feedback, ______.",
 model:"Although AI can provide immediate feedback, it cannot determine whether an error arose from confusion, carelessness or anxiety.",
 exp:"Công thức: nhượng bộ đúng <b>một</b> khả năng cụ thể, rồi nêu giới hạn thuộc loại khác — không phủ nhận điều vừa thừa nhận."},
{q:"While digital tutoring may widen access, ______.",
 model:"While digital tutoring may widen access, the students best placed to exploit it are often those who already have quiet space, reliable internet and study habits.",
 exp:"Nhượng bộ <i>access</i>, phản bác ở <i>outcome</i>. Giữ đúng cơ chế của đoạn F."},
{q:"Admittedly, teachers cannot give every learner constant individual attention, but ______.",
 model:"Admittedly, teachers cannot give every learner constant individual attention, but the attention they do give is informed by knowledge of the student that no system currently possesses.",
 exp:"Nhượng bộ về <b>số lượng</b>, phản bác về <b>chất lượng</b> — kỹ thuật rất hiệu quả cho band 7+."},
{q:"AI can support homework, provided that ______.",
 model:"AI can support homework, provided that the task is designed to develop reasoning rather than simply to produce a finished text.",
 exp:"<i>provided that</i> đặt điều kiện <b>cần</b>. Câu điều kiện phải cụ thể, nếu không cả câu thành sáo rỗng."}
]},

{t:"quiz",title:"Ngữ pháp · C. Văn phong nói và học thuật",tag:"Grammar",kind:"free",
instr:"Các câu sau viết đúng nhưng quá trang trọng cho Speaking. Chuyển thành ngôn ngữ nói tự nhiên mà không mất nội dung.",items:[
{q:"It is imperative that educational institutions retain professional oversight.",
 model:"I think schools really do need to keep a teacher in control of what's being taught.",
 exp:"Bỏ <i>It is imperative that</i> + giả định thức. Thêm chủ ngữ <i>I</i> và động từ thường — Speaking cần người nói xuất hiện trong câu."},
{q:"The utilisation of artificial intelligence may exacerbate pre-existing inequality.",
 model:"Using AI could actually make the gap bigger than it already is.",
 exp:"Danh từ hoá (<i>utilisation</i>) → động từ (<i>using</i>); <i>exacerbate</i> → <i>make bigger</i>. Speaking ưu tiên động từ, Writing ưu tiên danh từ."},
{q:"Learners may demonstrate excessive dependence on automated systems.",
 model:"Students can end up depending on these tools a bit too much.",
 exp:"<i>demonstrate dependence</i> là cấu trúc động từ rỗng + danh từ. Nói thì dùng thẳng <i>depend on</i>."},
{q:"This technological intervention facilitates immediate diagnostic feedback.",
 model:"What it does is tell you straight away what you got wrong and why.",
 exp:"Ba từ trừu tượng liên tiếp là dấu hiệu văn viết. Cấu trúc <i>What it does is…</i> rất tự nhiên trong Speaking."}
]},

{t:"note",title:"Kiểm tra chuyển giao cuối ngày",tag:"Checklist",html:`
<ul class="tips checklist">
<li>Tôi sử dụng <b>ý tưởng</b> từ Reading và không sao chép câu.</li>
<li>Lập trường trong bài Writing trả lời trực tiếp vấn đề <b>replace</b>, không dừng ở nhận xét “AI is useful”.</li>
<li>Mỗi đoạn thân bài đều giải thích <b>cơ chế</b>.</li>
<li>Câu trả lời Speaking có đặc điểm của <b>ngôn ngữ nói</b>, không giống bài luận được đọc thành tiếng.</li>
<li>Tôi đã vận dụng lại ít nhất <b>mười hai</b> cụm từ dưới các hình thức khác nhau.</li>
<li>Tôi đã xác định <b>một ý kiến đã thay đổi</b> sau khi đọc.</li>
</ul>`},

{t:"note",title:"Sản phẩm cần nộp — Ngày 19",tag:"Checklist",html:`
<ul class="tips checklist">
<li>Đáp án Reading và nhật ký bằng chứng (14 câu)</li>
<li>Ba câu thesis</li>
<li>Một bài luận hoàn chỉnh hoặc một đoạn thân bài có bấm giờ</li>
<li>Một đoạn văn vận dụng (12 phút)</li>
<li>Sáu bản ghi âm Part 3 (hoặc ba bản ở mức 60 phút)</li>
<li>Một bản chép lời đã sửa</li>
<li><b>24-phrase transfer bank</b></li>
</ul>
<div class="model" style="margin-top:12px"><span class="lb">Lưu ý</span>
Topic vocabulary is not a list of expensive words. It is a <b>network of ideas</b> you can explain, question and reuse without sounding copied.</div>`}
]}
;
