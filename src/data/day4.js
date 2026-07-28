const TF = ["TRUE","FALSE","NOT GIVEN"];
export default
{
id:4, title:"Ngày 04 — Độ trôi chảy trong Speaking",
focus:"Trôi chảy = duy trì mạch ý, dừng đúng chỗ và tự sửa gọn — không phải nói nhanh. Ghi âm → chép lời → sửa MỘT lỗi → ghi âm lại.",
blocks:[

{t:"note",title:"Ba mục tiêu luyện Speaking",tag:"Lý thuyết",html:`
<ol style="font-size:14px;padding-left:20px">
<li><b>Trả lời sớm.</b> Nêu ý chính ngay từ đầu, tránh dành quá nhiều thời gian cho câu dẫn.</li>
<li><b>Nói theo cụm nghĩa.</b> Nhóm các từ có quan hệ về nghĩa để tạo nhịp nói tự nhiên.</li>
<li><b>Tự sửa gọn.</b> Sửa một lần rồi tiếp tục triển khai ý.</li>
</ol>
<div class="model" style="border-color:#2f7a52;background:rgba(47,191,113,.07)"><span class="lb" style="color:var(--ok)">Khoảng dừng có ích</span>
I suppose the main reason is… <i>[brief pause]</i> …that people want more control over their time.<br>
<span style="color:var(--tx2)">Khoảng dừng nằm giữa hai cụm nghĩa hoàn chỉnh nên người nghe vẫn nhận ra cấu trúc câu.</span></div>
<div class="model" style="border-color:#7a2f34;background:rgba(242,85,90,.07)"><span class="lb" style="color:var(--bad)">Chỗ ngắt làm mất mạch</span>
I suppose… people… because… they… control… many time…<br>
<span style="color:var(--tx2)">Các từ bị tách rời khiến người nghe không nhận ra cấu trúc câu.</span></div>
<p style="margin:14px 0 6px"><b>Cụm báo hiệu đang làm rõ hoặc điều chỉnh ý</b></p>
<ul class="tips">
<li>What I mean is…</li><li>Let me put it another way.</li>
<li>Actually, a better example would be…</li><li>I would not say that exactly. I think…</li>
<li>The word I am looking for is…</li>
</ul>`},

{t:"passage",title:"Bài đọc 04",subtitle:"Why Pauses Are Not the Enemy",paras:[
["A","People often judge fluent speech by speed. A fast speaker appears confident, while a slower speaker may be assumed to lack knowledge. Yet speed is only one feature of communication, and it can be misleading. A person who speaks rapidly but repeats ideas, loses sentence structure or forces the listener to guess key words is not communicating efficiently."],
["B","Pauses perform several useful functions. They allow a speaker to plan the next idea, give important information more emphasis and help a listener process what has just been said. In prepared public speaking, a short silence can make a sentence more memorable. In conversation, it can signal that the speaker is thinking rather than finishing."],
["C","The location of a pause matters. Pausing between complete thought groups usually sounds natural. Pausing in the middle of a basic phrase can make comprehension harder. Compare “I usually study / after dinner / because the house is quieter” with “I usually / study after / dinner because / the house…”. The total amount of silence may be similar, but the first version preserves meaning."],
["D","Learners also need ways to recover when a sentence goes wrong. Many stop completely, apologise and attempt to restart from the beginning. This creates more disruption than the original mistake. A short repair phrase can keep the conversation moving. Expressions such as “What I mean is” or “Let me put it another way” tell the listener that a correction is coming and preserve the relationship between the ideas."],
["E","Pronunciation plays a similar role. An accent is not a problem simply because it is recognisable. Difficulty arises when important sounds disappear, word stress repeatedly falls on the wrong syllable or every word receives equal emphasis. In these cases, the listener must work harder to identify meaning. Clear final consonants and sensible sentence stress often improve intelligibility more than an attempt to imitate a particular national accent."],
["F","The most effective practice is therefore not always “speak more”. Learners benefit from recording a short answer, identifying one specific problem and repeating the same answer with a focused change. A student may work only on final /s/ endings, or on dividing the answer into thought groups. The second recording provides direct evidence of whether the change improved clarity."]
]},

{t:"quiz",title:"Câu hỏi 1–5 · Ghép tiêu đề",tag:"Reading",start:1,col:true,
instr:"Chọn tiêu đề phù hợp nhất cho các đoạn B–F.",
shared:["I. Accent removal as the main goal","II. The useful work performed by silence","III. Repairing an answer without destroying its flow","IV. Why the position of a pause changes clarity","V. Focused repetition instead of uncontrolled quantity","VI. A fast speaker is always more confident","VII. Pronunciation features that affect intelligibility"],
items:[
{q:"Paragraph B",a:1,ev:"“Pauses perform several useful <b>functions</b>… plan the next idea, give emphasis, help a listener process…”",
 exp:"<b>II</b>. Cả đoạn liệt kê công dụng của khoảng lặng. Bẫy VI là quan niệm sai mà đoạn A <i>bác bỏ</i>, không phải tiêu đề."},
{q:"Paragraph C",a:3,ev:"“The <b>location</b> of a pause matters… the first version preserves meaning.”",exp:"<b>IV</b>. Từ khoá là <i>location / position</i>, không phải số lần dừng."},
{q:"Paragraph D",a:2,ev:"“A short <b>repair phrase</b> can keep the conversation moving.”",exp:"<b>III</b>. <i>recover when a sentence goes wrong</i> ↔ <i>repairing</i>; <i>keep the conversation moving</i> ↔ <i>without destroying its flow</i>."},
{q:"Paragraph E",a:6,ev:"“An accent is not a problem simply because it is recognisable… Clear final consonants and sensible sentence stress often improve <b>intelligibility</b>.”",
 exp:"<b>VII</b>. Bẫy I ngược hẳn ý đoạn — đoạn nói <i>không</i> cần xoá bỏ accent."},
{q:"Paragraph F",a:4,ev:"“The most effective practice is therefore <b>not always “speak more”</b>… repeating the same answer with a focused change.”",
 exp:"<b>V</b>. <i>uncontrolled quantity</i> ↔ <i>speak more</i>; <i>focused repetition</i> ↔ <i>one specific problem / focused change</i>."}
]},

{t:"quiz",title:"Câu hỏi 6–8 · Trắc nghiệm",tag:"Reading",start:6,items:[
{q:"What is the writer’s main criticism of very fast speech?",opts:["It always sounds unfriendly.","It can hide weak organisation and unclear language.","It prevents speakers from using advanced vocabulary.","It is unsuitable for prepared presentations."],a:1,
 ev:"Đoạn A: “A person who speaks rapidly but <b>repeats ideas, loses sentence structure or forces the listener to guess key words</b> is not communicating efficiently.”",
 exp:"Ba vấn đề trong đoạn A đều thuộc về <i>tổ chức</i> và <i>độ rõ ngôn ngữ</i> → B. A sai vì có <i>always</i>."},
{q:"Why can apologising and restarting from the beginning be unhelpful?",opts:["It creates more disruption than the first mistake.","It makes the speaker sound too formal.","It removes all sentence stress.","It prevents the examiner from asking another question."],a:0,
 ev:"Đoạn D: “This creates <b>more disruption than the original mistake</b>.”",exp:"Gần như nguyên văn — chỉ đổi <i>original</i> thành <i>first</i>."},
{q:"What does the writer recommend for pronunciation practice?",opts:["Copying one national accent perfectly","Changing several pronunciation features at once","Re-recording the same answer with one focused change","Avoiding difficult final consonants"],a:2,
 ev:"Đoạn F: “recording a short answer, identifying <b>one specific problem</b> and repeating the same answer with a focused change.”",
 exp:"A và B đều bị bài phản bác trực tiếp (đoạn E: không cần bắt chước accent; đoạn F: chỉ sửa một điểm)."}
]},

{t:"quiz",title:"Bài luyện Part 1 theo A-R-E",tag:"Speaking",kind:"free",
instr:"Trình tự: <b>Trả lời → Lí do → Chi tiết bổ sung</b>. Mỗi câu khoảng 20–30 giây. Ghi âm rồi mới so với mẫu.<br><br><b>Lỗi triển khai cần tránh:</b> “Yes, I do. It is very interesting.” · Nói 40 giây lịch sử chủ đề trước khi trả lời · Dùng <i>Firstly, secondly, in conclusion</i> trong Part 1.",
items:[
{q:"Do you prefer mornings or evenings?",model:"I prefer evenings because I feel more mentally alert once the day's work is finished. I normally use that time to plan lessons or watch something light, so evenings feel less rushed than mornings.",exp:"Đây là mẫu chuẩn A-R-E của sách: <b>A</b> — I prefer evenings · <b>R</b> — because I feel more alert · <b>E</b> — I normally use that time to…"},
{q:"What do you usually do after a long day?",model:"Usually as little as possible, to be honest. I'll cook something simple and put a podcast on, mainly because I need about an hour where nothing requires a decision before I can think clearly again.",exp:"Câu trả lời có giọng cá nhân + một lí do thật. Tránh liệt kê ba hoạt động rời rạc."},
{q:"Do you like taking photos?",model:"I do, though I take far more than I ever look at. I mostly photograph places rather than people, because I find a picture brings back the feeling of a day much faster than anything I write down.",exp:"Có nhượng bộ nhỏ (<i>though…</i>) — cách rất tự nhiên để kéo dài câu trả lời mà không lan man."},
{q:"How often do you listen to music?",model:"Almost constantly when I'm doing anything routine — commuting, cooking, tidying. I avoid it while reading, though, because anything with lyrics competes with the words on the page.",exp:"Chi tiết cụ thể (<i>lyrics compete with the words</i>) làm câu trả lời đáng nhớ hơn <i>it helps me relax</i>."},
{q:"Do you enjoy cooking?",model:"I enjoy the result more than the process, if I'm honest. I cook the same five or six dishes very well and panic slightly with anything new, but I'd rather eat at home than order in most evenings."},
{q:"Is your hometown a good place for young people?",model:"Partly. It's safe and cheap, which matters, but there isn't much work beyond tourism, so most people my age leave at eighteen and only come back at weekends."},
{q:"Are you an organised person?",model:"I'm good at planning and less good at protecting the plan. My calendar is detailed, but a single unexpected interruption tends to derail the rest of the afternoon."},
{q:"What kind of weather do you like?",model:"Cool and slightly overcast — the sort of weather where you can walk for an hour without noticing. Heat makes me lethargic, and I get very little done in the middle of summer."}
]},

{t:"note",title:"Khung câu chuyện · Chuẩn bị 3 câu chuyện dùng lại",tag:"Speaking",html:`
<p class="instr">Chuẩn bị <b>ba câu chuyện có thật</b> để tái sử dụng với nhiều cue card khác nhau. Đây là kỹ thuật tiết kiệm thời gian lớn nhất của Part 2.</p>
<table class="vt">
<tr><th>Câu chuyện 1 — Một người</th><th>Câu chuyện 2 — Một địa điểm</th><th>Câu chuyện 3 — Một trải nghiệm</th></tr>
<tr>
<td>Người được nhắc đến<br>Bối cảnh<br>Một khoảnh khắc cụ thể<br>Hành động của người đó<br>Cảm xúc của người kể<br>Điều rút ra<br><b>Cue card có thể dùng</b></td>
<td>Địa điểm<br>Đặc điểm / cảm giác về nơi đó<br>Sự việc đã xảy ra<br>Một chi tiết cảm nhận bằng giác quan<br>Ý nghĩa của địa điểm<br><b>Cue card có thể dùng</b></td>
<td>Bối cảnh trước sự việc<br>Sự việc chính<br>Khó khăn<br>Quyết định hoặc thay đổi<br>Kết quả<br>Điều rút ra<br><b>Cue card có thể dùng</b></td>
</tr></table>
<div class="model" style="margin-top:12px"><span class="lb">Ví dụ tái sử dụng</span>
Một câu chuyện về “người thầy dạy tôi cách trình bày” có thể dùng cho: <i>a person who communicates well · a person who helped you · a teacher you remember · a piece of advice you were given · a skill you learned from someone</i>.</div>`},

{t:"speaking",title:"Bài luyện Part 2 & Part 3 về giao tiếp",tag:"Speaking",
instr:"Part 2 — dàn ý 1 phút chỉ ghi <b>năm từ khoá</b>: (1) bối cảnh (2) tình huống minh hoạ (3) giọng nói/ngôn ngữ cơ thể/một chi tiết (4) ảnh hưởng đến người khác (5) điều rút ra. Mức nền tảng 90–120 giây; mức mở rộng 1'45–2'.<br>Part 3 — trình tự 5 bước: <b>quan điểm → lí do → ví dụ hoặc cơ chế → trường hợp đối lập/giới hạn → nhận xét khép lại</b>.",
parts:[
{label:"Part 2 · Cue card",qs:[
["Describe a person who communicates well. — who the person is · how you know them · what makes their communication effective · and explain what you have learned from them",
"The person I'd like to describe is a teacher I had in my final year of secondary school, who taught literature but was really teaching us how to explain things. I knew her for about two years, and she supervised a small discussion group I was part of. What made her communication effective wasn't fluency in the obvious sense — she actually spoke quite slowly. It was that she gave people room to speak. She'd ask a question and then simply wait, sometimes for what felt like an uncomfortable length of time, until somebody filled the silence with an actual thought rather than a reflex. A good example would be a lesson where a student gave a very vague answer, and instead of correcting him she said, 'Let me put that another way,' and rephrased her own question. He got it immediately. What I've learned from her is mostly about pauses. I used to think that fluency meant speed and that silence signalled that I didn't know something. Now I'd say the opposite — a short pause between thought groups makes people listen harder, and it gives me time to build a sentence I can actually finish."]
]},
{label:"Part 3",qs:[
["Why are some people better communicators than others?","I'd say the biggest single factor is listening rather than speaking. People who communicate well tend to adjust what they're saying based on whether the other person is following, which requires them to be paying attention to someone other than themselves. A good example would be a doctor explaining a diagnosis: the words are the easy part; noticing that the patient has stopped understanding is the skill. That said, confidence plays a role too, and confidence isn't distributed fairly — it's heavily shaped by how much practice someone was given at school."],
["Has online communication made people less patient listeners?","To some extent, yes. When conversation is written and asynchronous, you can skim, reply half-way through and never really process the whole message, and I think that habit transfers into face-to-face situations. The counterargument, though, is that online communication has also made some people much better at being concise, which is itself a form of respect for the listener. So I'd say it's changed what patience looks like rather than simply reducing it."],
["Should schools teach public speaking?","Definitely, and I'd argue it's one of the highest-value things a school can do, because almost every profession requires you to explain something to someone who doesn't already understand it. The mechanism is exposure: fear of speaking comes from rarity, so the only reliable cure is doing it often in a low-stakes setting. The limitation is that it has to be taught properly — a single terrifying presentation in front of the whole year group can easily do more harm than good."],
["Is it easier to communicate with people of the same age?","Usually, yes, mainly because of shared reference points rather than shared vocabulary. You don't have to explain the context. But I'd add a qualification: conversations with people much older or younger are often more useful precisely because nothing can be assumed, so both sides have to be explicit — and being forced to be explicit is good practice."],
["How important is body language in professional situations?","It matters more than people expect, though not in the way self-help books suggest. It's less about deliberate gestures and more about signalling attention — eye contact, not interrupting, visible acknowledgement that you've heard something. Where I'd be cautious is with cross-cultural claims: what reads as confident in one workplace can read as aggressive in another, so the safest rule is to match the room rather than follow a formula."]
]}
]},

{t:"quiz",title:"Bài luyện ngắt cụm (thought groups)",tag:"Pronunciation",col:true,start:1,
instr:"Chọn cách ngắt cụm tự nhiên nhất. Dấu <span class='kbd'>/</span> là chỗ dừng.",items:[
{q:"1. I normally study after dinner because the house is much quieter.",
 opts:["I normally study / after dinner / because the house is much quieter.","I normally / study after / dinner because / the house is much quieter.","I / normally study after dinner because / the house is much / quieter."],a:0,
 exp:"Mỗi cụm là một đơn vị nghĩa hoàn chỉnh: hành động / thời gian / lí do. Phương án B tách <i>study after dinner</i> ngay giữa cụm → người nghe mất cấu trúc."},
{q:"2. One reason she communicates well is that she gives people time to finish.",
 opts:["One reason / she communicates / well is that she gives / people time to finish.","One reason she communicates well / is that she gives people time to finish.","One / reason she / communicates well is / that she gives people time to finish."],a:1,
 exp:"Ngắt tại ranh giới chủ ngữ dài | vị ngữ — vị trí dừng tự nhiên nhất trong tiếng Anh."},
{q:"3. I used to speak very quickly, but now I try to stress the main words.",
 opts:["I used to / speak very / quickly, but now I / try to stress the main words.","I used / to speak very quickly, but / now I try to stress / the main words.","I used to speak very quickly, / but now I try to stress the main words."],a:2,
 exp:"Ngắt tại dấu phẩy, đúng ranh giới hai mệnh đề tương phản."},
{q:"4. Online communication is convenient, although it can make some conversations feel rushed.",
 opts:["Online communication is convenient, / although it can make some conversations feel rushed.","Online / communication is convenient although / it can make some / conversations feel rushed.","Online communication / is convenient although it / can make some conversations / feel rushed."],a:0,
 exp:"Mệnh đề nhượng bộ <i>although…</i> là một cụm nghĩa nguyên khối — không tách."}
]},

{t:"quiz",title:"Trọng âm từ",tag:"Pronunciation",col:true,start:1,
instr:"Chọn âm tiết mang trọng âm chính.",items:[
{q:"communication",opts:["COM-mu-ni-ca-tion","com-MU-ni-ca-tion","com-mu-ni-CA-tion","com-mu-ni-ca-TION"],a:2,exp:"Danh từ đuôi <b>-tion</b> luôn nhấn vào âm tiết <b>ngay trước</b> đuôi: /kəˌmjuːnɪˈkeɪʃn/."},
{q:"confident",opts:["CON-fi-dent","con-FI-dent","con-fi-DENT"],a:0,exp:"/ˈkɒnfɪdənt/ — nhấn âm đầu. So sánh với <i>conFIDE</i> (động từ) để thấy trọng âm dịch chuyển."},
{q:"organised",opts:["OR-ga-nised","or-GA-nised","or-ga-NISED"],a:0,exp:"/ˈɔːɡənaɪzd/ — nhấn âm đầu, giống <i>ORganise</i>."},
{q:"effective",opts:["EF-fec-tive","ef-FEC-tive","ef-fec-TIVE"],a:1,exp:"/ɪˈfektɪv/ — tính từ đuôi <b>-ive</b> thường nhấn âm tiết trước đuôi."},
{q:"pronunciation",opts:["pro-NUN-ci-a-tion","pro-nun-ci-A-tion","PRO-nun-ci-a-tion"],a:1,exp:"/prəˌnʌnsiˈeɪʃn/. Lưu ý: <i>proNOUNCE</i> (V) nhưng <i>pronunciATION</i> (N) — cả trọng âm lẫn nguyên âm đều đổi."},
{q:"memorable",opts:["MEM-o-ra-ble","me-MO-ra-ble","me-mo-RA-ble"],a:0,exp:"/ˈmemərəbl/ — nhấn âm đầu, ba âm tiết sau đọc rất nhẹ."},
{q:"comfortable",opts:["COM-fort-a-ble","com-FORT-a-ble","com-fort-A-ble"],a:0,exp:"/ˈkʌmftəbl/ — thực tế thường chỉ đọc <b>3</b> âm tiết: COMF-ta-ble."},
{q:"develop",opts:["DE-ve-lop","de-VE-lop","de-ve-LOP"],a:1,exp:"/dɪˈveləp/ — nhấn âm giữa. Giữ nguyên khi thêm đuôi: deVELopment, deVELoping."}
]},

{t:"note",title:"Bài luyện âm cuối",tag:"Pronunciation",html:`
<p class="instr">Đọc chậm từng nhóm, sau đó đọc lại ở tốc độ tự nhiên. <b>Âm cuối rõ giúp người nghe hiểu hơn là cố bắt chước accent bản xứ.</b></p>
<table class="vt">
<tr><th>Nhóm</th><th>Từ</th><th>Điểm cần chú ý</th></tr>
<tr><td class="ph">/t/ cuối</td><td>want · went · important · different · confident</td><td>Người Việt hay nuốt /t/. Không cần bật mạnh, nhưng lưỡi phải chạm lợi.</td></tr>
<tr><td class="ph">/k/ cuối</td><td>work · task · public · speak · mistake</td><td><i>task</i> có cụm /sk/ — luyện riêng, đừng bỏ /k/.</td></tr>
<tr><td class="ph">/z/ số nhiều</td><td>needs · ideas · friends · students · skills</td><td>Sau âm hữu thanh đọc /z/, không phải /s/. Mất /s//z/ là lỗi ảnh hưởng ngữ pháp.</td></tr>
<tr><td class="ph">-ed</td><td>worked /t/ · changed /d/ · learned /d/ · improved /d/ · noticed /t/</td><td>Chỉ thêm âm tiết /ɪd/ khi từ kết thúc bằng /t/ hoặc /d/ (wanted, needed).</td></tr>
</table>`},

{t:"writing",title:"Bài vận dụng vào Writing",tag:"Writing",
prompt:"Why is clear communication more important than using impressive vocabulary?",
instr:"Viết 120–150 từ. Có thể dùng ý trong bài đọc nhưng phải trình bày bằng <b>văn phong học thuật</b>. Các dấu hiệu khẩu ngữ như <i>I'd say</i>, <i>to be honest</i> KHÔNG phù hợp với bài viết này.",
check:["Tôi có dùng cụm khẩu ngữ nào từ ngân hàng Speaking không?","Mỗi câu có một chức năng riêng, hay chỉ diễn đạt lại câu trước?","Tôi có dùng từ nào mà bản thân không giải thích được nghĩa chính xác không?"],
model:`<b>Bài mẫu (~145 từ):</b><br>
Clarity matters more than lexical sophistication because the purpose of language is transfer, not display. An advanced word contributes nothing if the listener must pause to decode it, and that pause costs precisely the attention the speaker needs. Ambitious vocabulary also carries a hidden risk: a term used slightly outside its normal collocation signals uncertainty far more strongly than a simple word used precisely. A candidate who writes “the government should implement stringent regulations” communicates effectively; one who writes “the government should execute stringent regulations” has produced a more impressive-looking sentence that is measurably less accurate. Clarity, moreover, is a structural quality rather than a lexical one — it depends on whether each sentence advances the argument by one step. This explains why examiners reward controlled, well-organised writing with moderate vocabulary above dense writing that obscures its own reasoning.<br>
<span style="color:var(--tx2)">Ghi chú: bài mẫu không dùng <i>I</i>, không dùng cụm khẩu ngữ, và mỗi câu đều thêm một bước lập luận mới.</span>`},

{t:"vocab",title:"Ngân hàng cụm từ Speaking",tag:"Vocabulary",
instr:"Đây là cụm <b>chức năng</b> (dùng để điều hướng câu trả lời), khác với cụm chủ đề. Dùng vừa phải — quá nhiều sẽ nghe như học thuộc.",
items:[
["I’d say…","mở đầu ý kiến","I’d say she is effective because she listens carefully."],
["To be honest…","tạo giọng kể tự nhiên","To be honest, I used to avoid public speaking."],
["What I mean is…","làm rõ ý","What I mean is, she never makes people feel rushed."],
["Let me put it another way.","diễn đạt lại","Let me put it another way. Confidence matters, but clarity matters more."],
["That said…","bổ sung ý đối lập","That said, speaking slowly can also become unnatural."],
["A good example would be…","dẫn vào ví dụ","A good example would be my high-school teacher."],
["I used to think…, but now…","thể hiện sự thay đổi","I used to think fluency meant speed, but now I see it differently."],
["lose my train of thought","quên đường ý","I sometimes lose my train of thought when I speak too quickly."],
["get the point across","truyền đạt được ý","Simple language can help you get the point across."],
["give someone room to speak","để người khác có cơ hội nói","A good listener gives other people room to speak."],
["sound rehearsed","nghe như học thuộc","Too many memorised phrases can sound rehearsed."],
["speak in meaningful chunks","nói theo cụm nghĩa","I am learning to speak in meaningful chunks."]
]},

{t:"note",title:"Sửa bản chép lời + Sản phẩm — Ngày 4",tag:"Checklist",html:`
<p class="instr">Chọn <b>45 giây</b> từ bản ghi âm và chép lại <b>nguyên văn</b>, kể cả chỗ lặp. Điền bảng 3 cột: <i>Câu nói ban đầu · Vấn đề · Cách sửa tự nhiên</i>. Bản sửa vẫn phải giữ đặc điểm của lời nói (dạng viết tắt, từ nối đơn giản, nhịp nói tự nhiên) — không biến nó thành văn viết.</p>
<ul class="tips checklist">
<li>Tám câu trả lời Part 1</li>
<li>Ba khung câu chuyện</li>
<li>Một bản ghi âm Part 2</li>
<li>Ít nhất hai câu trả lời Part 3</li>
<li>Bản chép lời 45 giây <b>và bản thu lần hai</b> (chỉ sửa MỘT mục tiêu)</li>
<li>Bài luyện phát âm trong năm phút</li>
</ul>`}
]}
;
