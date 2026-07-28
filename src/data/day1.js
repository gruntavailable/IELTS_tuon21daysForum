const TF = ["TRUE","FALSE","NOT GIVEN"];
export default
{
id:1, title:"Ngày 01 — Xác định điểm xuất phát",
focus:"Làm bài đầu vào trung thực, có bấm giờ. Mục tiêu là thu bằng chứng về vị trí mất điểm, không phải điểm cao.",
blocks:[

{t:"note",title:"Quy tắc làm bài đầu vào",tag:"Hướng dẫn",html:`
<ul class="tips">
<li>Ghi ngày giờ bắt đầu, bật đồng hồ, <b>không dùng từ điển</b>, không dừng giữa chừng.</li>
<li>Khoanh mọi đáp án bạn <b>đoán</b> — đúng do đoán vẫn là quy trình chưa ổn định.</li>
<li>Với Speaking: giữ nguyên ngập ngừng, nói lại, lỗi ngữ pháp trong bản ghi âm.</li>
<li>Nhịp học: 60 phút → câu 1–8 trong 20 phút · 90 phút → đủ 12 câu trong 25 phút · 150 phút → làm trọn bộ + rà soát bằng chứng.</li>
</ul>`},

{t:"passage",title:"Practice Passage 01",subtitle:"The Quiet Cost of Constant Switching",paras:[
["A","Many students believe that they are good at doing several things at once. A typical study session may involve reading a textbook, replying to messages, checking a short video, changing a song and returning to the textbook a few minutes later. Because each interruption is brief, the student may feel that little time has been lost. The more important loss, however, is not measured only in minutes. It is the repeated mental effort required to leave one task and rebuild attention on another."],
["B","Psychologists often distinguish between true simultaneous activity and rapid task switching. Some combinations are relatively easy. A person can walk while having a casual conversation because walking is highly automatic for most adults. Two demanding language tasks are different. Reading a difficult article and writing a thoughtful reply both require active control of working memory. When a student moves rapidly between them, the brain does not perform both at full strength. It keeps changing which goal is receiving priority."],
["C","This switching creates what researchers sometimes call a resumption cost. After an interruption, people need time to remember where they were, what they were trying to understand and what they planned to do next. The delay may last only several seconds, but it can occur dozens of times in one hour. More importantly, the quality of thought may become shallower. A student can still recognise words on a page while failing to build a clear understanding of the argument."],
["D","Digital platforms are not the only cause. Students may interrupt themselves even when no notification appears. Once the habit of checking has become strong, a moment of difficulty can trigger the desire to escape. A confusing paragraph, an unfamiliar term or a slow writing task creates discomfort. Opening another app provides an immediate sense of novelty and relief. Over time, this pattern can train the learner to respond to difficulty by changing tasks instead of staying with the problem."],
["E","The solution is not necessarily to remove every device from the room. For some learners, digital tools are essential because lessons, dictionaries and class materials are online. A more practical approach is to reduce unnecessary switching. Students can place messages on silent mode, decide in advance when they will check them and work in blocks long enough to reach deeper concentration. The exact length of a block varies. A beginner may start with fifteen focused minutes, while an experienced learner may work for forty or fifty minutes before taking a short break."],
["F","It is also useful to make distractions visible. At the side of a notebook, a student can draw a small line every time they feel the urge to leave the task. This simple record often reveals that the problem is not a lack of intelligence or motivation. It is a repeated behavioural pattern. Once the pattern becomes visible, the student can test a different routine and compare the results. This is why a baseline matters. Improvement becomes easier to judge when the learner has evidence of the starting point."],
["G","None of this means that long, uninterrupted study is always better. Attention declines when people are exhausted, and breaks can protect both accuracy and motivation. The important difference is whether the break is chosen or automatic. A deliberate five-minute pause after a completed work block supports concentration. An unplanned series of interruptions every two minutes prevents concentration from forming in the first place."]
]},

{t:"quiz",title:"Questions 1–5 · True / False / Not Given",tag:"Reading",
instr:"TRUE nếu nhận định phù hợp với bài đọc, FALSE nếu trái với bài đọc, NOT GIVEN nếu bài không cung cấp đủ thông tin.",
shared:TF,start:1,items:[
{q:"Students usually calculate the full mental cost of brief interruptions accurately.",a:1,
 ev:"Đoạn A: “Because each interruption is brief, the student may feel that little time has been lost. The more important loss, however, is not measured only in minutes.”",
 exp:"Bài nói ngược lại: người học <b>đánh giá thấp</b> cái giá phải trả. Bẫy: TRÁI NGƯỢC."},
{q:"Walking and holding a casual conversation may be easier than combining two demanding language tasks.",a:0,
 ev:"Đoạn B: “A person can walk while having a casual conversation… Two demanding language tasks are different.”",
 exp:"Đúng nghĩa, chỉ diễn đạt lại. <i>relatively easy</i> ↔ <i>easier than</i>."},
{q:"Resumption costs always last for more than one minute.",a:1,
 ev:"Đoạn C: “The delay may last only several seconds…”",
 exp:"Bẫy MỨC ĐỘ TUYỆT ĐỐI (<i>always</i>) + số liệu trái ngược (vài giây, không phải hơn một phút)."},
{q:"Students may check another app even when they have received no notification.",a:0,
 ev:"Đoạn D: “Students may interrupt themselves even when no notification appears.”",
 exp:"Paraphrase gần như trực tiếp."},
{q:"The passage recommends that every learner use a fifty-minute study block.",a:1,
 ev:"Đoạn E: “The exact length of a block varies. A beginner may start with fifteen focused minutes…”",
 exp:"Bài nói độ dài <b>thay đổi tuỳ người</b>. <i>every learner</i> là bẫy tuyệt đối."}
]},

{t:"quiz",title:"Questions 6–8 · Multiple Choice",tag:"Reading",start:6,items:[
{q:"What is the main point of Paragraph C?",opts:["Students should read more slowly.","Switching can reduce both time and depth of understanding.","Working memory can store unlimited information.","Difficult vocabulary is the main cause of distraction."],a:1,
 ev:"Đoạn C: “The delay may last only several seconds… More importantly, the quality of thought may become shallower.”",
 exp:"Đoạn C nêu hai tổn thất: <b>thời gian</b> (resumption cost) và <b>chiều sâu</b> (shallower thought). B gộp đúng cả hai."},
{q:"According to Paragraph D, why can a difficult paragraph lead to task switching?",opts:["It creates discomfort that the student wants to escape.","It proves that the student chose the wrong subject.","It makes digital tools stop working.","It causes physical exhaustion immediately."],a:0,
 ev:"Đoạn D: “A confusing paragraph… creates discomfort. Opening another app provides an immediate sense of novelty and relief.”",
 exp:"Cơ chế: khó → khó chịu → muốn thoát. Đúng nguyên văn ý của đoạn."},
{q:"What distinction does the writer make in Paragraph G?",opts:["Online study and classroom study","Long breaks and short breaks","Chosen breaks and automatic interruptions","Strong students and weak students"],a:2,
 ev:"Đoạn G: “The important difference is whether the break is chosen or automatic.”",
 exp:"B là bẫy từ khoá: đoạn có nói về nghỉ, nhưng tiêu chí phân biệt là <b>chủ động vs tự động</b>, không phải dài/ngắn."}
]},

{t:"gap",title:"Questions 9–12 · Sentence Completion",tag:"Reading",start:9,
instr:"Hoàn thành mỗi câu bằng KHÔNG QUÁ BA TỪ lấy từ bài đọc.",items:[
{q:"After an interruption, a learner may need to remember the next step they had ______.",a:["planned to do","planned"],
 ev:"Đoạn C: “…and what they planned to do next.”",exp:"Cần dạng V-ed sau <i>they had</i>. Cả “planned” lẫn “planned to do” đều được chấp nhận."},
{q:"Digital tools may be necessary because course materials are often ______.",a:["online"],
 ev:"Đoạn E: “…lessons, dictionaries and class materials are online.”",exp:"Một từ, lấy nguyên văn."},
{q:"A student can record the desire to leave a task by drawing ______ in a notebook.",a:["a small line","a line","small line"],
 ev:"Đoạn F: “…a student can draw a small line every time they feel the urge to leave the task.”",exp:"Giữ mạo từ <i>a</i> cho đúng ngữ pháp câu."},
{q:"A deliberate pause can protect concentration when it follows a completed ______.",a:["work block","block"],
 ev:"Đoạn G: “A deliberate five-minute pause after a completed work block supports concentration.”",exp:"<i>after</i> ↔ <i>follows</i> là cặp paraphrase cần nhận ra."}
]},

{t:"quiz",title:"Bài ngữ pháp đầu vào · Sửa lỗi",tag:"Grammar",kind:"free",
instr:"Sửa từng câu và giữ cấu trúc ở mức vừa đủ. Gõ câu sửa rồi bấm “Xem đáp án” để đối chiếu.",items:[
{q:"Many student checks their phone while they are study.",model:"Many students check their phones while they are studying.",exp:"3 lỗi: số nhiều sau <i>many</i>; hoà hợp chủ ngữ–động từ; <i>are + V-ing</i>."},
{q:"Because notifications make it difficult to focus.",model:"Because notifications make it difficult to focus, students often lose track of their work.",exp:"Câu cụt (fragment): mệnh đề <i>Because…</i> cần một mệnh đề chính."},
{q:"The number of interruptions are increasing during online lessons.",model:"The number of interruptions is increasing during online lessons.",exp:"<i>The number of</i> + N số nhiều → động từ <b>số ít</b>. (<i>A number of</i> mới đi với động từ số nhiều.)"},
{q:"Students can lose many informations when they change tasks quickly.",model:"Students can lose a lot of information when they change tasks quickly.",exp:"<i>information</i> là danh từ không đếm được: không có <i>-s</i>, không dùng <i>many</i>."},
{q:"Although technology is useful but it can become distracting.",model:"Although technology is useful, it can become distracting.",exp:"Không dùng đồng thời <i>although</i> và <i>but</i> — lỗi dịch từ “Mặc dù… nhưng…”."},
{q:"I spend too much time to check social media.",model:"I spend too much time checking social media.",exp:"Cấu trúc cố định: <i>spend time <b>doing</b> something</i>."},
{q:"People who studies in noisy places may find difficult to concentrate.",model:"People who study in noisy places may find it difficult to concentrate.",exp:"Đại từ quan hệ <i>who</i> thay <i>People</i> (số nhiều) → <i>study</i>; và cần <i>it</i> giả: <i>find <b>it</b> difficult to V</i>."},
{q:"This habit affects badly to their academic performance.",model:"This habit has a negative effect on their academic performance.",exp:"<i>affect</i> là ngoại động từ, không có <i>to</i>. Cách tự nhiên hơn: <i>have a negative effect/impact <b>on</b></i>."}
]},

{t:"quiz",title:"Cách sửa tự nhiên trong tiếng Anh",tag:"Dịch",kind:"free",
instr:"Viết lại các ý sau bằng tiếng Anh tự nhiên, tránh dịch từng từ.",items:[
{q:"Tôi rất thích học vào ban đêm.",model:"I really enjoy studying at night.",exp:"“rất thích” ≠ <i>very like</i>. Dùng <i>really like / really enjoy / am really into</i>."},
{q:"Điện thoại làm tôi mất tập trung hơn và hơn.",model:"My phone is distracting me more and more.",exp:"“hơn và hơn” → <i>more and more</i> / <i>increasingly</i>. Dùng động từ <i>distract</i> thay vì <i>make me lose focus</i>."},
{q:"Tôi bị áp lực vì có quá nhiều bài tập về nhà.",model:"I am under pressure because I have too much homework.",exp:"Cụm chuẩn: <i>be under pressure</i>. <i>homework</i> không đếm được → <i>too much</i>."},
{q:"Tôi muốn cải thiện bản thân trong tiếng Anh.",model:"I want to improve my English.",exp:"Bỏ hẳn <i>myself in</i> — dịch sát khiến câu thừa. Hoặc: <i>improve my English speaking skills</i>."}
]},

{t:"vocab",title:"Cụm từ về sự tập trung",tag:"Vocabulary",
instr:"Học bảng rồi làm quiz phía dưới. Sau đó tự viết 3 câu về thói quen học, 2 câu dùng cho Writing, 1 câu cho Speaking Part 3.",
items:[
["sustain attention","duy trì sự tập trung; sustain attention for/on","It is difficult to sustain attention when notifications appear every few minutes."],
["switch between tasks","chuyển qua lại giữa các việc","Many students switch between tasks without noticing how much time is lost."],
["working memory","trí nhớ làm việc","Complex reading places heavy demands on working memory."],
["a recurring error","lỗi lặp đi lặp lại","Article use is one of my recurring errors."],
["lose track of","quên mình đang làm tới đâu","I sometimes lose track of my argument when I write too quickly."],
["rebuild concentration","lấy lại sự tập trung","After checking my phone, I need time to rebuild concentration."],
["an unplanned interruption","sự gián đoạn không chủ ý","An unplanned interruption can break the flow of a difficult task."],
["work in focused blocks","học theo từng khoảng tập trung","I work in focused blocks of twenty-five minutes."],
["make a pattern visible","nhận diện rõ một thói quen","Keeping a log makes the pattern visible."],
["judge progress","đánh giá tiến bộ","A baseline helps learners judge progress more honestly."],
["under pressure","dưới áp lực","My grammar becomes less accurate under pressure."],
["prioritise an error","ưu tiên một lỗi","I need to prioritise the errors that affect clarity."]
]},

{t:"writing",title:"Bài Writing đầu vào · Task 2 body paragraph",tag:"Writing",
prompt:"Some people believe that secondary schools should ban students from using smartphones during the entire school day. To what extent do you agree or disagree?",
instr:"Hôm nay <b>không viết cả bài</b>. Chỉ viết một đoạn thân bài bảo vệ đúng lập trường đã chọn. Mức nền tảng 150–180 từ (1 cơ chế + 1 ví dụ). Mức mở rộng 190–220 từ (thêm 1 giới hạn/nhượng bộ + 1 hệ quả).",
check:["Tôi đã trả lời đúng yêu cầu về lệnh cấm <b>hoàn toàn</b>, hay mới bàn chung về điện thoại?","Mỗi câu có bổ sung một ý mới không?","Ví dụ có chứng minh được luận điểm không?","Tôi có dùng cụm từ nào mà bản thân chưa giải thích được không?"],
model:`<b>Topic sentence (sách gợi ý):</b> A complete ban could improve students’ concentration during lessons, but it may be unnecessarily rigid during breaks or activities where phones serve a practical purpose.<br><br>
<b>Đoạn mẫu tham khảo (~200 từ):</b><br>
A complete ban could improve students’ concentration during lessons, but it may be unnecessarily rigid during breaks or activities where phones serve a practical purpose. The mechanism is straightforward: a phone in a pocket still competes for attention, because each notification forces the learner to leave one task and rebuild concentration on another. Even a brief check has a resumption cost, and when this happens dozens of times a day, the depth of classroom thinking suffers rather than merely the total minutes. Removing the device during instruction therefore protects something that willpower alone cannot. However, a ban that covers the entire school day ignores situations in which phones are genuinely useful. Students may need to contact a parent about transport, photograph a whiteboard before it is erased, or use a dictionary application in a language lesson. A blanket rule also shifts responsibility away from the student: young people who never practise self-regulation at school may struggle badly once they leave it. A more defensible policy would restrict phones in lessons while allowing supervised use at break times, so that schools protect attention without pretending that the technology can be removed from adult life.`},

{t:"speaking",title:"Bài Speaking đầu vào",tag:"Speaking",
instr:"Ghi âm toàn bộ các phần trong <b>một tệp</b>, không dừng giữa các phần. Sau đó nghe lại và điền phiếu quan sát.",
parts:[
{label:"Part 1",qs:[
["What do you usually do when you need to concentrate?","I normally put my phone on silent and move to a different room, because the main thing that breaks my focus is not noise but the temptation to check messages. I also work in blocks of about twenty-five minutes, which sounds strict, but it stops me from drifting."],
["Do you often check your phone while studying?","More than I would like, to be honest. I've started drawing a small line in my notebook every time I feel the urge, and seeing ten lines in an hour was quite a shock — it made the habit visible rather than vague."],
["What subject did you find most difficult at school?","Physics, mainly because I tried to memorise formulas instead of understanding the mechanism behind them. Once a teacher made me explain each step out loud, it became far more manageable."],
["Do you prefer studying in silence or with background noise?","Silence for reading, background noise for routine work. Anything that requires holding an argument in my head needs quiet, whereas I can copy vocabulary cards with music on."],
["Are you good at managing your time?","I'm reasonably good at planning and rather poor at protecting the plan. I can write a realistic schedule, but a single unplanned interruption tends to derail the rest of the afternoon."],
["What would you like to improve about your English?","Fluency under pressure. My grammar is more accurate when I write than when I speak, so I lose track of my sentence structure once I have to think and talk at the same time."]
]},
{label:"Part 2 · Cue card",qs:[
["Describe a time when you changed the way you studied. — what you were studying · what your old method was · what you changed · and explain whether the new method worked",
"I'd like to talk about the way I changed my approach to vocabulary about a year ago, when I was preparing for an English test. My old method was extremely simple and, I now realise, extremely ineffective: I would write an English word in one column and a Vietnamese translation in the other, then read the list over and over the night before a test. I could recognise the words, but I couldn't use any of them in a sentence. The change came when a teacher pointed out that I was storing isolated words rather than patterns. So I rebuilt my notebook around chunks — instead of 'pressure', I wrote 'be under pressure' and 'place pressure on someone', with an example sentence that was actually true about my own life. I also spaced the review out: the next day in Speaking, a week later in Writing. Did it work? Not immediately, and the first few weeks felt slower because each entry took longer to make. But after roughly a month I noticed I was retrieving phrases while speaking rather than translating word by word, which is exactly the problem I had been trying to solve."]
]},
{label:"Part 3",qs:[
["Why do many students find it difficult to concentrate today?","I'd say the main reason is that difficulty and distraction now sit on the same device. When a paragraph becomes confusing, relief is one tap away, so students gradually train themselves to respond to difficulty by switching tasks. That said, I don't think it's purely technological — a lot of study is also poorly structured, and vague tasks are much easier to abandon than specific ones."],
["Should schools control how students use technology?","To some extent, yes, particularly during lessons, because expecting teenagers to out-discipline an application designed by professionals is unrealistic. But control shouldn't mean removal. If students never practise regulating their own use at school, they simply meet the same problem at university with no strategy at all."],
["Is self-discipline more important than intelligence in learning?","Over a long period, probably yes. Intelligence may determine how quickly someone understands a new concept, but discipline determines how many hours of that understanding actually accumulate. The qualification I'd add is that self-discipline isn't purely a personality trait — it depends heavily on environment, so it's fairer to say a good system beats raw willpower."]
]}
]},

{t:"note",title:"Sản phẩm cần nộp — Ngày 1",tag:"Checklist",html:`
<ul class="tips checklist">
<li>Điểm Reading và phiếu ghi bằng chứng (12 câu)</li>
<li>Đoạn Writing đầu tiên</li>
<li>Bản ghi âm Speaking chưa chỉnh sửa</li>
<li><b>Ba lỗi cần ưu tiên</b> — ghi thành thao tác cụ thể, không ghi nhãn rộng</li>
<li>Sáu cụm từ đã được vận dụng trong câu tự viết</li>
</ul>
<div class="model" style="margin-top:12px"><span class="lb">Ví dụ nhãn lỗi</span>
❌ “vốn từ yếu.” &nbsp;→&nbsp; ✅ “tôi lặp các từ chung như good, bad, important vì chưa truy xuất được cụm từ theo chủ đề khi bị giới hạn thời gian.”</div>`}
]}
;
