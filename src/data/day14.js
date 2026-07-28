const TF = ["TRUE","FALSE","NOT GIVEN"];
export default
{
id:14, title:"Ngày 14 — Đánh giá có bấm giờ",
focus:"Áp lực thời gian làm lộ những kỹ năng mới chỉ ổn định khi luyện chậm. Mỗi lỗi phải được phân loại: kiến thức, kỹ thuật, thời gian hay sự tập trung.",
blocks:[

{t:"note",title:"Định hướng học tập",tag:"Hướng dẫn",html:`
<p>Bài đánh giá thứ hai cần chỉ ra <b>chính xác phần nào suy giảm</b>: Reading thiếu bằng chứng, Writing bỏ overview hoặc viết câu quá dài, Speaking lặp ý hay mất âm cuối.</p>
<div class="model" style="margin-top:12px"><span class="lb">Bốn nguyên nhân — bốn cách sửa khác nhau</span>
Cùng một đáp án sai có thể xuất phát từ những nguyên nhân khác nhau, nên bài sửa cũng phải khác.<br><br>
Học thêm từ vựng <b>không</b> giải quyết được lỗi đọc nhầm từ phủ định.<br>
Làm thêm đề <b>không</b> sửa được thói quen dành quá lâu cho một câu.</div>
<p class="instr" style="margin-top:10px">Sau khi xác định nguyên nhân, hãy thiết kế một bài tập ngắn <b>mô phỏng đúng áp lực đã gặp</b> rồi thực hiện lại. Lượt làm thứ hai phải giữ <b>cùng giới hạn thời gian</b> để kiểm tra xem cách sửa có tác dụng hay chưa.</p>`},

{t:"note",title:"Tiêu chí hoàn thành",tag:"Checklist",html:`
<div class="tablewrap"><table class="vt">
<tr><th>Sản phẩm</th><th>Yêu cầu</th><th>Cách tự kiểm tra</th></tr>
<tr><td class="ph">Bài Reading có bấm giờ</td><td>Hoàn thành phần đã chọn trong đúng thời lượng.</td><td>Mỗi câu sai có <b>bằng chứng</b> và <b>nguyên nhân được phân loại</b>.</td></tr>
<tr><td class="ph">Bài Writing có bấm giờ</td><td>Hoàn thành đúng phần bài và dành thời gian rà soát.</td><td>Giữ đủ cấu trúc, đúng nhiệm vụ, không có lỗi do bỏ kiểm tra.</td></tr>
<tr><td class="ph">Bài thi thử Speaking</td><td>Ghi âm liên tục theo thời lượng đã chọn.</td><td>Xác định được chỗ mất mạch, lặp ý và lỗi phát âm <b>tăng khi vội</b>.</td></tr>
<tr><td class="ph">Phiếu áp lực</td><td>Ghi thời điểm, hành vi, nguyên nhân và cách sửa.</td><td>Mỗi ưu tiên dẫn đến <b>một bài tập ngắn có thể thực hiện lại</b>.</td></tr>
</table></div>
<div class="model" style="margin-top:12px"><span class="lb">Mục tiêu</span>
Một kỹ năng chỉ <b>ổn định</b> khi bạn vẫn vận dụng được trong thời gian giới hạn. Hôm nay, phần rà soát tập trung vào <b>ba lỗi có ảnh hưởng lớn nhất</b>.</div>`},

{t:"note",title:"Tổng quan trong ngày",tag:"Nhịp học",html:`
<div class="tablewrap"><table class="vt">
<tr><th>Nhịp học</th><th>Reading</th><th>Writing</th><th>Speaking</th><th>Rà soát</th></tr>
<tr><td class="ph">60 phút</td><td>Câu 1–8 trong 20 phút</td><td>Overview hoặc đoạn văn trong 15 phút</td><td>Ghi âm 4 phút</td><td>Ghi phiếu trong 15 phút</td></tr>
<tr><td class="ph">90 phút</td><td>Trọn bộ trong 25 phút</td><td>Viết có bấm giờ trong 25 phút</td><td>Thi thử ngắn 10 phút</td><td>Hoàn thành phiếu áp lực trong 30 phút</td></tr>
<tr><td class="ph">150 phút</td><td>Đủ Reading trong 60 phút</td><td>Đủ Writing trong 60 phút</td><td>Thi thử 15 phút</td><td>Ghi nhanh, rà soát vào ngày hôm sau</td></tr>
</table></div>`},

{t:"note",title:"Nhóm nguyên nhân gây áp lực",tag:"Hướng dẫn",html:`
<p>Phân loại nguyên nhân là bước <b>quyết định bài luyện tiếp theo</b>. Nếu thiếu kiến thức, cần bổ sung quy tắc hoặc ngôn ngữ. Nếu kiến thức đã có nhưng không được dùng đúng lúc, bài luyện phải <b>tái tạo thao tác và giới hạn thời gian</b> đã gây lỗi. Mỗi lỗi chỉ nên được xếp vào <b>một</b> nguyên nhân chính có bằng chứng rõ nhất.</p>
<div class="tablewrap"><table class="vt">
<tr><th>Nhóm</th><th>Mô tả</th></tr>
<tr><td class="ph">Kiến thức</td><td>Chưa biết từ, cấu trúc ngữ pháp, yêu cầu dạng bài hoặc ý cần triển khai.</td></tr>
<tr><td class="ph">Kỹ thuật</td><td>Có đủ kiến thức nhưng dùng <b>sai quy trình</b> — ví dụ đọc lại toàn bài nhiều lần mà chưa xác định vị trí bằng chứng.</td></tr>
<tr><td class="ph">Thời gian</td><td>Dành quá nhiều thời gian cho một câu, lập kế hoạch chưa hợp lý, hoặc không chừa thời gian rà soát.</td></tr>
<tr><td class="ph">Sự tập trung</td><td>Làm quá vội, đọc nhầm từ, mất tập trung hoặc mắc lỗi chuyển đáp án có thể tránh được.</td></tr>
</table></div>
<div class="model" style="margin-top:12px"><span class="lb">Phiếu phải ghi một sự việc cụ thể</span>
❌ <b>Nhận xét chung:</b> “Tôi đã bất cẩn.”<br><br>
✅ <b>Mô tả cụ thể:</b> “Ở phút 18, tôi đọc <i>least</i> thành <i>most</i> vì đã ngừng gạch chân từ chỉ dẫn khi nhận thấy mình chậm tiến độ.”</div>`},

{t:"passage",title:"Bài đọc 14",subtitle:"The Multitasking Myth",paras:[
["A","Modern work and study environments reward visible activity. A person who answers messages while attending a meeting and editing a document may appear highly productive. Yet the appearance of simultaneous progress can hide a large amount of switching, delay and error."],
["B","Human attention has limits. Simple automatic activities can sometimes occur together, but two tasks that both require language, decision-making or working memory compete for the same mental resources. The brain does not smoothly divide full concentration between them. It rapidly changes priority, often without the person noticing the transition."],
["C","Each switch creates a small cost. The worker must remember the previous goal, reconstruct context and decide what to do next. When switches are frequent, these costs accumulate. The person may still complete many small actions, but complex work takes longer and contains more mistakes."],
["D","Multitasking can also create an inaccurate feeling of productivity. Rapid activity is stimulating, and clearing notifications provides frequent moments of completion. Deep work feels slower because progress may remain invisible for a long period. A researcher can spend an hour understanding a difficult problem without producing a single finished message, yet that hour may create far more value."],
["E","The effect is not identical for every task. Routine administrative work may tolerate more interruption than writing, coding or analysing evidence. Experience can also reduce the mental effort required for familiar tasks. However, expertise does not remove the basic limit. An experienced writer may recover faster after an interruption, but the interruption still has a cost."],
["F","Organisations sometimes cause the problem through expectations. Employees may be praised for immediate replies even when their main work requires concentration. Meetings are scheduled across the day, leaving no uninterrupted block. If responsiveness is treated as the main sign of commitment, workers adapt by keeping communication channels open constantly."],
["G","Solutions therefore need more than personal willpower. Individuals can silence notifications and group similar tasks, but organisations must also protect focused time. Some teams create meeting-free periods, define which messages are genuinely urgent and evaluate output rather than online visibility."],
["H","The aim is not to eliminate communication or perform one activity for an entire day. It is to match the attention strategy to the task. Fast switching may be acceptable while processing simple requests. It becomes costly when the work requires a person to hold several ideas together and develop them carefully."]
]},

{t:"quiz",title:"Câu hỏi 1–5 · Phân loại nhận định (T/F/NG)",tag:"Reading",
instr:"TRUE nếu nhận định phù hợp với bài đọc, FALSE nếu trái với bài đọc, NOT GIVEN nếu bài không cung cấp đủ thông tin.",
shared:TF,start:1,items:[
{q:"Visible activity always indicates high productivity.",a:1,
 ev:"Đoạn A: “Yet the appearance of simultaneous progress can hide a large amount of switching, delay and error.”",
 exp:"Bài nói hoạt động dễ thấy có thể <b>che giấu</b> tổn thất. Bẫy tuyệt đối <i>always</i> → FALSE."},
{q:"Two demanding language tasks compete for limited mental resources.",a:0,
 ev:"Đoạn B: “…two tasks that both require language, decision-making or working memory compete for the same mental resources.”",
 exp:"Khớp gần nguyên văn, kể cả động từ <i>compete for</i>."},
{q:"Every task switch is consciously noticed.",a:1,
 ev:"Đoạn B: “It rapidly changes priority, often without the person noticing the transition.”",
 exp:"<i>without the person noticing</i> phủ định trực tiếp. Bẫy <i>Every</i> + <i>consciously</i> → FALSE."},
{q:"A worker may feel productive because notifications provide small moments of completion.",a:0,
 ev:"Đoạn D: “Rapid activity is stimulating, and clearing notifications provides frequent moments of completion.”",
 exp:"<i>frequent moments of completion</i> ↔ <i>small moments of completion</i>. Đây chính là cơ chế “cảm giác năng suất giả”."},
{q:"The passage states that experienced workers are unaffected by interruptions.",a:1,
 ev:"Đoạn E: “An experienced writer may recover faster after an interruption, but the interruption still has a cost.”",
 exp:"Bài nói kinh nghiệm giúp <b>hồi phục nhanh hơn</b> chứ không miễn nhiễm. <i>unaffected</i> trái ngược → FALSE."}
]},

{t:"quiz",title:"Câu hỏi 6–9 · Trắc nghiệm",tag:"Reading",start:6,
instr:"Chọn đáp án đúng A, B, C hoặc D.",items:[
{q:"What does Paragraph C emphasise?",opts:["Complex work is impossible in offices.","Small switching costs can accumulate into slower, less accurate work.","Memory becomes unlimited with practice.","Messages are more difficult than research."],a:1,
 ev:"Đoạn C: “When switches are frequent, these costs accumulate… complex work takes longer and contains more mistakes.”",
 exp:"B gộp đúng cả ba yếu tố: chi phí nhỏ → tích luỹ → chậm hơn và nhiều lỗi hơn. A quá mạnh (<i>impossible</i>)."},
{q:"Why can deep work feel less productive?",opts:["It produces no value.","It is always boring.","Progress may remain invisible for a period.","It requires no mental effort."],a:2,
 ev:"Đoạn D: “Deep work feels slower because progress may remain invisible for a long period.”",
 exp:"Chú ý chữ <i>feel</i> trong câu hỏi. A trái ngược trực tiếp — bài nói giờ đó <i>may create far more value</i>."},
{q:"According to Paragraph F, how can organisations encourage multitasking?",opts:["By providing longer holidays","By rewarding immediate responses and filling the day with meetings","By reducing access to email","By evaluating useful output"],a:1,
 ev:"Đoạn F: “Employees may be praised for immediate replies… Meetings are scheduled across the day, leaving no uninterrupted block.”",
 exp:"D là bẫy: đó là <b>giải pháp</b> ở đoạn G, không phải nguyên nhân ở đoạn F. Chú ý câu hỏi hỏi cách <i>encourage</i>."},
{q:"What is the writer’s main recommendation?",opts:["Remove all communication from work.","Use one attention strategy for every task.","Match the amount of switching to the demands of the task.","Allow only experienced workers to multitask."],a:2,
 ev:"Đoạn H: “The aim is not to eliminate communication… It is to match the attention strategy to the task.”",
 exp:"A và B đều bị câu đầu đoạn H bác bỏ trực tiếp. Đây là dạng câu hỏi mà <b>câu phủ định</b> trong bài loại được nhiều phương án."}
]},

{t:"gap",title:"Câu hỏi 10–12 · Hoàn thành câu",tag:"Reading",start:10,
instr:"Hoàn thành câu bằng KHÔNG QUÁ BA TỪ lấy từ bài đọc.",items:[
{q:"After a switch, a worker has to reconstruct ______.",a:["context"],
 ev:"Đoạn C: “The worker must remember the previous goal, reconstruct context and decide what to do next.”",
 exp:"Chép nguyên văn cụm động từ + tân ngữ <i>reconstruct context</i>. Chỉ cần một từ."},
{q:"Teams may protect concentration by creating ______ periods.",a:["meeting-free","meeting free"],
 ev:"Đoạn G: “Some teams create meeting-free periods…”",
 exp:"Tính từ ghép có gạch nối <i>meeting-free</i> tính là một từ. Cấu trúc <i>X-free</i> rất đáng học (<i>tax-free, car-free</i>)."},
{q:"Fast switching is least suitable when workers must hold several ideas together and develop them ______.",a:["carefully"],
 ev:"Đoạn H: “…when the work requires a person to hold several ideas together and develop them carefully.”",
 exp:"Cần trạng từ sau <i>develop them</i>. Câu hỏi lặp gần nguyên văn nên định vị rất nhanh."}
]},

{t:"writing",title:"Bài Writing có bấm giờ",tag:"Writing",
prompt:`Chọn <b>một</b> phương án:<br><br>
<b>Lựa chọn A — Task 1</b> <i>(dàn ý 4 phút · viết 20 phút · không dùng từ điển)</i><br>
The bar chart shows the average number of hours per day that four age groups spent using screens for study or work, social media, video entertainment and gaming. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.<br>
<img src="src/assets/pdf/day14-screen-time.png" alt="Average daily screen time by purpose" style="max-width:100%;margin-top:10px;border-radius:8px"><br><br>
<b>Lựa chọn B — Một phần Task 2</b> <i>(25 phút)</i><br>
Some people believe that being able to do several things at the same time is an important skill. Others believe people perform better when they focus on one task.<br>Discuss both views and give your opinion.<br>
<i>Viết: phần mở bài · một đoạn thân bài · phần kết luận ngắn.</i>`,
instr:"Giữ đúng giới hạn thời gian và <b>chừa thời gian rà soát</b>. Nếu hết giờ trước khi rà soát, hãy ghi lại điều đó — đó chính là dữ liệu cho phiếu áp lực.",
check:["(A) Overview nêu hai đặc điểm khái quát","(A) Nhóm dữ liệu theo <b>mục đích sử dụng</b> hoặc theo <b>nhóm tuổi</b>, nhất quán","(B) Trình bày <b>cả hai</b> quan điểm trước khi nêu ý kiến riêng","(B) Ý kiến riêng nhất quán với đoạn thân bài","Đã dành ít nhất 2 phút rà soát cuối"],
model:`<b>Lựa chọn B — mở bài + thân bài + kết luận mẫu (~230 từ):</b><br>
<b>[Mở bài]</b> Whether the ability to handle several tasks simultaneously is a genuine skill, or whether concentration on one task produces better results, is a question that workplaces answer very differently. My own view is that the disagreement largely disappears once we distinguish between kinds of work.<br><br>
<b>[Thân bài]</b> Those who value multitasking point to environments where responsiveness genuinely matters, and they have a reasonable case: a coordinator handling routine requests would be ineffective if each message waited for an uninterrupted block. The difficulty is that this argument is then extended to work of a completely different type. Two tasks that both demand language and working memory cannot in fact be performed at once; the brain switches rapidly between them, and each switch requires the worker to reconstruct where they were. Individually these costs are trivial, but repeated dozens of times an hour they make complex work both slower and less accurate. What makes the illusion persistent is that switching <i>feels</i> productive — clearing notifications supplies constant small moments of completion, whereas an hour of difficult thinking may produce nothing visible at all.<br><br>
<b>[Kết luận]</b> I therefore agree with the second view for demanding work, while accepting the first for routine tasks. The real skill is not multitasking itself but recognising which kind of work is in front of you, and organisations that reward visible responsiveness make that recognition considerably harder.`},

{t:"speaking",title:"Bài thi thử Speaking",tag:"Speaking",
instr:"Ghi âm <b>liên tục, không dừng giữa chừng</b>. Khi nghe lại, đánh dấu thời điểm bắt đầu lặp ý, mất mạch hoặc mất âm cuối — và ghi lại <b>phút thứ mấy</b> điều đó xảy ra.",
parts:[
{label:"Part 1",qs:[
["Do you often do several things at the same time?","More than I should, honestly. I'll have a document open and be answering messages at the same time, and it feels efficient right up until I reread what I've written. Recently I've started grouping messages into two or three fixed points in the day instead, which is less responsive but produces better work."],
["What usually distracts you?","Notifications, though the more accurate answer is that I distract myself. Even with everything silenced, if a paragraph becomes difficult there's a strong pull to check something. So the trigger isn't really the device — it's the moment the work stops being comfortable."],
["Are you good at replying to messages quickly?","Probably too good, and I've come to see that as a mixed quality. Quick replies make you look reliable, which is rewarded, but the cost is that nothing else gets a long uninterrupted stretch. I'd rather be judged on what I finish than on how fast I respond."],
["Do you prefer a busy or quiet workplace?","It depends what I'm doing. For anything routine I actually prefer some background activity, because complete silence makes me restless. For writing or analysis I need quiet — not because noise is unbearable, but because a busy room means people can interrupt, and that's the part that costs."]
]},
{label:"Part 2 · Cue card",qs:[
["Describe a time when you had to manage several responsibilities. — what the responsibilities were · why you had them at the same time · how you managed them · and explain what you learned from the experience",
"The period I'd describe was my final university term, when I was finishing a dissertation, working three shifts a week at a bookshop, and had unexpectedly taken over organising a small student conference after the previous organiser dropped out. None of those were unreasonable individually; the problem was purely that they overlapped for about six weeks. My first approach was to handle everything as it arrived — answer the conference emails immediately, write the dissertation in the gaps, deal with shifts as they came. That failed quite badly. I remember rewriting the same dissertation paragraph across three separate sittings and it getting worse each time, because I was reconstructing my own argument from scratch every session. What eventually worked was crude but effective: I gave the conference a fixed hour each evening and refused to touch it outside that window, which meant emails sometimes waited a day. The dissertation got the first three hours of every morning with my phone in another room. What I learned was that the difficulty hadn't been the volume of work — it was the switching. Once each responsibility had a protected block, the total hours were roughly the same but the output was noticeably better, and I felt far less overwhelmed despite doing the same amount."]
]},
{label:"Part 3",qs:[
["Why do workplaces value quick responses?","Mainly because responsiveness is easy to observe and quality isn't. A manager can see that you replied within five minutes; they can't easily see whether an hour of thinking produced a better analysis. So responsiveness becomes a proxy for commitment, and employees adapt by keeping every channel open. The cost is that it makes concentrated work almost impossible to protect, since being unavailable starts to look like being uncommitted."],
["Is multitasking more common now than in the past?","The switching is certainly more frequent, though I'd question whether the underlying behaviour is new — people have always been interrupted. What's changed is that the interruptions now arrive continuously and from a device that's always present, and crucially that they're often self-initiated rather than imposed. I'd also say expectations have shifted: a delay that would have been completely normal twenty years ago now reads as unresponsiveness."],
["Should schools teach students how to manage attention?","I'd support it, because attention management is clearly trainable and currently left entirely to chance. Students could learn to work in blocks, to notice that the urge to switch usually arrives at the moment a task gets difficult, and to distinguish tasks that tolerate interruption from those that don't. The limitation is that a lesson competes with applications designed by professionals to be difficult to stop using — so I'd want it paired with changes to the environment rather than presented as purely a matter of willpower."]
]}
]},

{t:"note",title:"Phiếu theo dõi áp lực",tag:"Checklist",html:`
<p>Ghi sự việc theo <b>thời điểm cụ thể</b>, đánh dấu <b>một</b> nguyên nhân chính và viết một quyết định sửa có thể thực hiện trong buổi học kế tiếp.</p>
<div class="tablewrap"><table class="vt">
<tr><th>Sự việc (kèm phút)</th><th>Kiến thức</th><th>Kỹ thuật</th><th>Thời gian</th><th>Tập trung</th><th>Quyết định sửa</th></tr>
<tr><td class="ph">…</td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td class="ph">…</td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td class="ph">…</td><td></td><td></td><td></td><td></td><td></td></tr>
</table></div>
<div class="model" style="margin-top:12px"><span class="lb">“Làm thêm đề” còn quá rộng</span>
Một quyết định sửa phù hợp phải nêu đủ <b>dạng bài · thao tác · giới hạn thời gian</b>.<br>
Ví dụ: “Với dạng Matching Headings, tôi sẽ giới hạn <b>90 giây</b> cho mỗi đoạn và ghi <b>năm từ tóm tắt</b> trước khi chọn đáp án.”</div>

<h4 style="margin-top:16px">Bốn câu hỏi xác định nguyên nhân</h4>
<ul class="tips">
<li>Tôi <b>không biết</b> đáp án hay đã <b>không tìm được</b> bằng chứng?</li>
<li>Tôi <b>thiếu ý</b> cho bài Writing hay đã <b>dành quá nhiều thời gian</b> cho phần mở bài?</li>
<li>Tôi dừng lâu trong Speaking vì thiếu <b>ý</b>, thiếu <b>cụm từ</b> hay thiếu <b>cấu trúc câu</b>?</li>
<li>Độ chính xác bắt đầu giảm từ <b>phút thứ mấy</b>?</li>
</ul>
<div class="model" style="margin-top:10px"><span class="lb">Đọc dấu vết trong bản ghi âm</span>
Nhiều khoảng dừng ngay <b>trước động từ</b> → thường là thiếu <b>cấu trúc câu</b>.<br>
Một khoảng dừng dài <b>trước ví dụ</b> → thường liên quan đến <b>cách phát triển ý</b>.</div>`},

{t:"quiz",title:"Bài kiểm tra ngữ pháp tổng hợp",tag:"Grammar",kind:"free",
instr:"Sửa các câu trong giới hạn <b>mười phút</b>, rồi phân loại lỗi: hoà hợp chủ ngữ–động từ · cấu trúc song song · dạng động từ · giới từ · collocation. Sau lượt sửa, viết thêm một câu mới cho <b>hai loại lỗi xuất hiện nhiều nhất</b>.",items:[
{q:"The figure for working adults were the highest in study and work.",
 model:"The figure for working adults was the highest in study and work. <i>(hoà hợp chủ ngữ–động từ)</i>",
 exp:"Chủ ngữ là <i>The figure</i> (số ít), không phải <i>adults</i>. Cụm giới từ xen giữa là bẫy quen thuộc."},
{q:"People who multitasks often makes more errors.",
 model:"People who multitask often make more errors. <i>(hoà hợp chủ ngữ–động từ ×2)</i>",
 exp:"Hai lỗi cùng loại: <i>who</i> thay <i>People</i> (số nhiều) → <i>multitask</i>; động từ chính cũng phải là <i>make</i>."},
{q:"Although messages are useful, but they interrupt concentration.",
 model:"Although messages are useful, they interrupt concentration. <i>(cấu trúc)</i>",
 exp:"Không dùng đồng thời <i>although</i> và <i>but</i>."},
{q:"Employees are expected replying immediately.",
 model:"Employees are expected to reply immediately. <i>(dạng động từ)</i>",
 exp:"<i>be expected <b>to</b> V</i>. Bị động của <i>expect somebody to do something</i>."},
{q:"Deep work requires to hold several ideas in memory.",
 model:"Deep work requires holding several ideas in memory. <i>(dạng động từ)</i>",
 exp:"<i>require + V-ing</i> khi không có tân ngữ người. (Có tân ngữ thì dùng <i>require somebody <b>to</b> V</i>.)"},
{q:"The amount of gaming hours were lower among older adults.",
 model:"The number of gaming hours was lower among older adults. <i>(collocation + hoà hợp)</i>",
 exp:"Hai lỗi: <i>hours</i> đếm được → dùng <i>number</i>, không phải <i>amount</i>; và <i>The number of</i> → động từ số ít."},
{q:"Social media accounted the second largest use for three groups.",
 model:"Social media accounted for the second largest use among three groups. <i>(giới từ)</i>",
 exp:"<i>account <b>for</b></i> — cụm bắt buộc trong Task 1. Cũng nên đổi <i>for</i> → <i>among</i> ở vế sau cho chính xác."},
{q:"The reason is because quick replies are visible.",
 model:"The reason is that quick replies are visible. <i>(cấu trúc)</i>",
 exp:"<i>reason</i> đã mang nghĩa nguyên nhân → dùng <i>that</i>, không lặp bằng <i>because</i>."},
{q:"Workers may be less productivity when they switch too often.",
 model:"Workers may be less productive when they switch too often. <i>(từ loại)</i>",
 exp:"Sau <i>be less</i> cần <b>tính từ</b> (<i>productive</i>), không phải danh từ (<i>productivity</i>)."},
{q:"It depends in the complexity of the task.",
 model:"It depends on the complexity of the task. <i>(giới từ)</i>",
 exp:"<i>depend <b>on</b></i>. Nếu lỗi này lặp lại từ các ngày trước, hãy đưa nó vào ba ưu tiên Tuần 3."}
]},

{t:"vocab",title:"Ngân hàng cụm từ về áp lực",tag:"Vocabulary",
instr:"Các cụm vừa <b>mô tả hiện tượng</b>, vừa hỗ trợ phần <b>phân tích nguyên nhân</b>. Hãy chọn cụm theo chuỗi: sự việc quan sát được → cơ chế gây lỗi → quyết định sửa.<br><br><b>Ví dụ chuỗi:</b> <i>task switching</i> làm tăng <i>cognitive load</i>, vì vậy tôi sẽ <i>group similar tasks</i> và <i>protect focused time</i>.",
items:[
["cognitive load","tải nhận thức (không đếm được)","Multitasking increases cognitive load."],
["task switching","chuyển đổi nhiệm vụ","Frequent task switching reduces efficiency."],
["reconstruct context","dựng lại bối cảnh sau gián đoạn","Workers need time to reconstruct context."],
["an accumulated cost","chi phí tích luỹ","Small delays create an accumulated cost."],
["visible activity","hoạt động dễ quan sát (đối lập với <i>useful output</i>)","Visible activity is not always valuable output."],
["deep work","công việc tập trung sâu","Deep work needs uninterrupted time."],
["routine administrative work","việc hành chính lặp lại","Routine administrative work tolerates interruption better."],
["immediate responsiveness","phản hồi tức thì","Some companies reward immediate responsiveness."],
["protect focused time","bảo vệ thời gian tập trung","Managers should protect focused time."],
["group similar tasks","gom các việc giống nhau lại","I group similar tasks and answer messages together."],
["a meeting-free period","khoảng thời gian không họp","The team introduced a meeting-free period."],
["online visibility","mức độ hiện diện trực tuyến","Online visibility should not replace performance."],
["an avoidable error","lỗi có thể tránh được","Misreading the instruction was an avoidable error."],
["quality drops under pressure","chất lượng giảm khi bị áp lực","My sentence control drops under pressure."]
]},

{t:"note",title:"Bảng tổng kết áp lực Tuần 2",tag:"Checklist",html:`
<div class="tablewrap"><table class="vt">
<tr><th>Kỹ năng</th><th>Thiếu kiến thức</th><th>Lỗi kỹ thuật</th><th>Vấn đề thời gian</th><th>Vấn đề tập trung</th></tr>
<tr><td class="ph">Reading</td><td></td><td></td><td></td><td></td></tr>
<tr><td class="ph">Writing</td><td></td><td></td><td></td><td></td></tr>
<tr><td class="ph">Speaking</td><td></td><td></td><td></td><td></td></tr>
</table></div>

<h4 style="margin-top:16px">Ba ưu tiên cho Tuần 3</h4>
<p class="instr">Mỗi ưu tiên cần gồm: <b>một lỗi quan sát được</b> · <b>một thao tác sửa</b> · <b>một tiêu chí kiểm tra</b>.</p>
<div class="tablewrap"><table class="vt">
<tr><th>#</th><th>Lỗi quan sát được</th><th>Thao tác sửa</th><th>Tiêu chí kiểm tra</th></tr>
<tr><td class="ph">1</td><td></td><td></td><td></td></tr>
<tr><td class="ph">2</td><td></td><td></td><td></td></tr>
<tr><td class="ph">3</td><td></td><td></td><td></td></tr>
</table></div>
<div class="model" style="margin-top:10px"><span class="lb">Ví dụ một ưu tiên đạt chuẩn</span>
“Với dạng Matching Headings, tôi sẽ giới hạn <b>90 giây</b> cho mỗi đoạn và ghi <b>năm từ tóm tắt</b> trước khi chọn đáp án.”</div>`},

{t:"note",title:"Sản phẩm cần nộp — Ngày 14",tag:"Checklist",html:`
<ul class="tips checklist">
<li>Bài Reading có bấm giờ (12 câu)</li>
<li>Bài Writing có bấm giờ (Lựa chọn A hoặc B)</li>
<li>Bài thi thử Speaking ngắn</li>
<li>Phiếu theo dõi áp lực (có ghi phút cụ thể)</li>
<li>Ba ưu tiên cho Tuần 3</li>
</ul>
<div class="model" style="margin-top:12px"><span class="lb">Lưu ý</span>
Cảm giác mất bình tĩnh chỉ là <b>điểm bắt đầu</b> của phần rà soát. Bạn cần xác định <b>thời điểm</b> độ chính xác giảm, <b>thao tác nào</b> bị bỏ qua và <b>bài luyện nào</b> sẽ kiểm tra trực tiếp thao tác ấy.</div>`}
]}
;
