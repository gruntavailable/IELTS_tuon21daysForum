const TF = ["TRUE","FALSE","NOT GIVEN"];
export default
/* ==================== DAY 6 ==================== */
{
id:6, title:"Ngày 06 — Đặc điểm chính trong Task 1",
focus:"Overview phải nêu 2–3 đặc điểm bao quát nhất. Quan sát → chọn lọc → phân nhóm → so sánh → kiểm tra.",
blocks:[

{t:"note",title:"Năm bước xử lí Task 1 & chức năng của overview",tag:"Lý thuyết",html:`
<ol style="font-size:14px;padding-left:20px">
<li><b>Quan sát:</b> đơn vị, mốc thời gian, nhóm dữ liệu, dạng biểu đồ.</li>
<li><b>Chọn lọc:</b> giá trị cao nhất, thấp nhất, thay đổi lớn nhất, điểm ổn định, ngoại lệ.</li>
<li><b>Phân nhóm:</b> dữ liệu nào có thể trình bày cùng nhau.</li>
<li><b>So sánh:</b> làm rõ quan hệ giữa các số liệu, tránh nêu từng số riêng lẻ.</li>
<li><b>Kiểm tra:</b> độ chính xác, đơn vị, thì, nội dung overview.</li>
</ol>
<div class="model" style="border-color:#7a2f34;background:rgba(242,85,90,.07)"><span class="lb" style="color:var(--bad)">Câu overview còn chung chung</span>
<i>Overall, the figures changed in different ways.</i><br>
<span style="color:var(--tx2)">Áp dụng được cho hầu hết biểu đồ → chưa nêu được đặc điểm đáng chú ý nào.</span></div>
<div class="model" style="border-color:#2f7a52;background:rgba(47,191,113,.07)"><span class="lb" style="color:var(--ok)">Câu overview phù hợp</span>
<i>Overall, online courses became the most widely used method, while reliance on printed textbooks fell substantially. Face-to-face classes changed comparatively little and remained the second most common option at the end.</i></div>
<p style="color:var(--tx2);font-size:13.5px;margin-top:12px">Một overview thiếu chính xác sẽ làm bài mất định hướng dù người viết dùng được <i>skyrocket</i>, <i>plummet</i> hay <i>respectively</i>.</p>`},

{t:"passage",title:"Bài đọc 06",subtitle:"When Numbers Tell Different Stories",paras:[
["A","Numbers often appear objective because they are precise. A chart may show 42.6 per cent rather than “about two fifths”, and this precision can create a strong sense of certainty. Yet data never speak entirely for themselves. The way information is selected, grouped and displayed influences what a reader notices first."],
["B","Scale is one example. If a graph begins its vertical axis at 95 instead of zero, a rise from 96 to 99 can look dramatic. The numerical change is real, but the visual distance may exaggerate its importance. Starting every axis at zero is not always necessary, especially when small changes matter, but the scale should not mislead the reader about the size of the difference."],
["C","Categories also shape interpretation. A report on transport may combine walking and cycling into one group, making active travel appear larger. Another report may separate them and create a different ranking. Neither choice is automatically dishonest. The question is whether the grouping helps readers understand the issue or hides a pattern that deserves attention."],
["D","Time periods can produce similar effects. A company may advertise that sales rose sharply over the last three months, while a five-year chart shows that sales remain below their earlier peak. Both statements can be accurate. A responsible reader therefore checks the starting point, the end point and whether the selected period represents the longer trend."],
["E","A final problem is selective comparison. Saying that a figure “doubled” sounds powerful, but an increase from one person to two may have little practical significance. Percentages should therefore be read alongside actual totals when possible. In the same way, an average can hide large differences between groups."],
["F","IELTS Task 1 does not ask candidates to criticise every chart. However, the same data-literacy habits improve performance. Strong reports identify the main pattern, group information sensibly and avoid giving equal attention to every number. The aim is not to create drama. It is to help the reader see the structure of the information accurately."]
]},

{t:"quiz",title:"Câu hỏi 1–4 · Trắc nghiệm",tag:"Reading",start:1,items:[
{q:"Why can exact percentages create a strong sense of certainty?",opts:["They always come from reliable research.","Their precision appears objective.","They are easier to memorise than words.","They remove the need for interpretation."],a:1,
 ev:"Đoạn A: “Numbers often <b>appear objective because they are precise</b>… this precision can create a strong sense of certainty.”",
 exp:"Chú ý động từ <i>appear</i> — bài nói con số <i>trông có vẻ</i> khách quan, chứ không phải <i>là</i> khách quan. D sai vì bài khẳng định ngược lại: dữ liệu luôn cần diễn giải."},
{q:"What risk is associated with a vertical axis beginning at 95?",opts:["It can make a small rise look much larger.","It prevents the use of percentages.","It changes the actual data.","It makes every trend look stable."],a:0,
 ev:"Đoạn B: “a rise from 96 to 99 can <b>look dramatic</b>… the visual distance may <b>exaggerate its importance</b>.”",
 exp:"C là bẫy tinh vi: bài nói rõ “The numerical change is <b>real</b>” — dữ liệu không đổi, chỉ ấn tượng thị giác bị phóng đại."},
{q:"According to Paragraph D, what should a responsible reader check?",opts:["Only the latest three months","The colour of the graph","The start, end and wider time trend","Whether a company made a profit"],a:2,
 ev:"Đoạn D: “checks the <b>starting point, the end point</b> and whether the selected period represents the <b>longer trend</b>.”",exp:"Ba yếu tố khớp nguyên với phương án C."},
{q:"What is the main Task 1 lesson in Paragraph F?",opts:["Report every number equally.","Criticise the graph design.","Create a dramatic narrative.","Select and organise the main pattern accurately."],a:3,
 ev:"Đoạn F: “Strong reports <b>identify the main pattern, group information sensibly</b> and avoid giving equal attention to every number.”",
 exp:"A và C bị bài phủ định trực tiếp; B bị phủ định ở câu đầu đoạn (<i>does not ask candidates to criticise</i>)."}
]},

{t:"quiz",title:"Câu hỏi 5–8 · Phân loại nhận định (T/F/NG)",tag:"Reading",shared:TF,start:5,items:[
{q:"A graph should always start its vertical axis at zero.",a:1,
 ev:"Đoạn B: “Starting every axis at zero is <b>not always necessary</b>, especially when small changes matter.”",
 exp:"FALSE — bài nói ngược. Bẫy MỨC ĐỘ TUYỆT ĐỐI (<i>always</i>) kết hợp TRÁI NGƯỢC."},
{q:"Combining categories can influence the ranking shown in a report.",a:0,
 ev:"Đoạn C: “A report may combine walking and cycling into one group… Another report may separate them and <b>create a different ranking</b>.”",
 exp:"TRUE — gần như nguyên văn."},
{q:"A statement about a three-month rise may be accurate even if a longer trend is weaker.",a:0,
 ev:"Đoạn D: “A company may advertise that sales rose sharply over the last three months, while a five-year chart shows that sales remain below their earlier peak. <b>Both statements can be accurate.</b>”",
 exp:"TRUE. Đây là dạng câu kiểm tra xem bạn có đọc được câu <i>Both statements can be accurate</i> hay không — thiếu nó rất dễ chọn FALSE."},
{q:"IELTS candidates receive extra marks for explaining why the data changed.",a:2,
 ev:"Đoạn F chỉ nói Task 1 không yêu cầu phê phán biểu đồ; không đề cập gì đến <b>điểm số</b> cho việc giải thích nguyên nhân.",
 exp:"NOT GIVEN. Bẫy kiến thức ngoài: bạn <i>biết</i> rằng Task 1 không nên giải thích nguyên nhân, nhưng <b>bài đọc không nói điều đó</b>. Reading chỉ công nhận thứ passage thật sự nói."}
]},

{t:"note",title:"Bài luyện quan sát biểu đồ · 4 hình",tag:"Writing",html:`
<p class="instr">Bốn hình (A–D) nằm trong bản PDF gốc. Với <b>mỗi hình</b>, ghi lại sáu mục sau trước khi viết bất kỳ câu nào:</p>
<table class="vt">
<tr><th>Mục cần ghi</th><th>Vì sao</th></tr>
<tr><td class="ph">Giá trị cao nhất</td><td>Thường là một nửa của overview.</td></tr>
<tr><td class="ph">Giá trị thấp nhất</td><td>Cặp đối lập với giá trị cao nhất — tạo khung so sánh.</td></tr>
<tr><td class="ph">Thay đổi lớn nhất</td><td>Đặc điểm chính của biểu đồ theo thời gian.</td></tr>
<tr><td class="ph">Đặc điểm ổn định nhất</td><td>Rất hay bị bỏ sót; “không đổi” cũng là một đặc điểm chính.</td></tr>
<tr><td class="ph">Hai cách phân nhóm có thể dùng</td><td>Quyết định cấu trúc Body 1 / Body 2.</td></tr>
<tr><td class="ph">Một câu KHÔNG nên xuất hiện trong overview</td><td>Rèn phản xạ loại bỏ số liệu vụn.</td></tr>
</table>
<p style="margin:14px 0 6px"><b>Câu hỏi gợi ý theo từng hình</b></p>
<table class="vt">
<tr><th>Hình</th><th>Câu hỏi định hướng</th></tr>
<tr><td class="ph">A — Preferred Learning Methods over Time</td><td>Phương pháp nào thay đổi nhiều nhất? Phương pháp nào giảm? Cái nào tương đối ổn định? Có thứ hạng nào thay đổi không?</td></tr>
<tr><td class="ph">B — Weekly Learning Activities</td><td>Hoạt động nào chiếm nhiều thời gian nhất ở từng nhóm? Hoạt động nào luôn ít nhất? Nhóm nào dành tổng thời gian nhiều nhất?</td></tr>
<tr><td class="ph">C — Entertainment Spending</td><td>Hạng mục nào tăng tỉ trọng nhiều nhất? Hạng mục nào mất tỉ trọng? Hai hạng mục nào cộng lại chiếm ưu thế mỗi năm?</td></tr>
<tr><td class="ph">D — Modes of Transport</td><td>Thành phố nào giảm dùng ô tô nhiều nhất? Giao thông công cộng tăng mạnh nhất ở đâu? Thành phố nào vẫn phụ thuộc ô tô nhất?</td></tr>
</table>
<p style="margin:14px 0 6px"><b>Dàn ý phân nhóm — chọn một hình và hoàn thành</b></p>
<ul class="tips">
<li>Câu paraphrase trong Introduction:</li>
<li>Đặc điểm thứ nhất trong overview:</li>
<li>Đặc điểm thứ hai trong overview:</li>
<li>Nhóm dữ liệu và lí do chọn cho Body 1:</li>
<li>Nhóm dữ liệu và lí do chọn cho Body 2:</li>
<li>Sáu số liệu chính:</li>
</ul>`},

{t:"quiz",title:"Bài luyện viết overview · 6 câu",tag:"Writing",kind:"free",
instr:"Viết ít nhất sáu câu overview dựa trên bốn hình. Mẫu bên dưới dùng số liệu ví dụ của Hình A/B/C/D trong sách — hãy thay bằng số liệu thực tế trên hình bạn đang nhìn.",
items:[
{q:"Hình A — Phương pháp nào thay đổi nhiều nhất, phương pháp nào giảm?",
 model:"Overall, online courses rose dramatically to become the dominant learning method, whereas printed textbooks experienced a sustained decline.",
 exp:"Đây là mẫu chuẩn của sách. Chú ý cấu trúc: <i>Overall</i> + đặc điểm 1 + <i>whereas</i> + đặc điểm 2 trong MỘT câu. Không kèm số liệu."},
{q:"Hình A — Phương pháp nào tương đối ổn định? Thứ hạng có đổi không?",
 model:"Face-to-face classes were considerably more stable and remained in use by just over half of students in 2026, holding second place throughout.",
 exp:"“Ổn định” cũng là một đặc điểm chính. Câu overview thứ hai thường dành cho ngoại lệ hoặc yếu tố không đổi."},
{q:"Hình B — Hoạt động nào chiếm nhiều thời gian nhất ở từng nhóm, hoạt động nào luôn ít nhất?",
 model:"Overall, media consumption absorbed the greatest number of hours in every group, while speaking practice was consistently the least common activity regardless of age.",
 exp:"Từ khoá của biểu đồ so sánh nhóm là <i>in every group / regardless of</i> — thể hiện bạn đã nhìn xuyên suốt chứ không mô tả từng cột."},
{q:"Hình C — Hạng mục nào tăng tỉ trọng, hạng mục nào mất tỉ trọng?",
 model:"Overall, streaming services accounted for a steadily increasing share of entertainment spending, whereas cinema and physical media both lost ground; together, streaming and games came to dominate the market by the final year.",
 exp:"Với biểu đồ tỉ trọng phải dùng ngôn ngữ <i>share / proportion / accounted for</i>, không dùng <i>number</i>."},
{q:"Hình D — Thành phố nào giảm dùng ô tô nhiều nhất, nơi nào giao thông công cộng tăng mạnh nhất?",
 model:"Overall, car use declined in all four cities, with the sharpest fall recorded in Riverton, while public transport grew most markedly in Northport; despite this shift, Southbay remained the most car-dependent city throughout the period.",
 exp:"Cấu trúc ba mệnh đề: xu hướng chung → nơi nổi bật nhất → ngoại lệ. Đây là dạng overview ghi điểm cao nhất."},
{q:"Viết một câu KHÔNG nên xuất hiện trong overview (và giải thích vì sao).",
 model:"❌ “In 2018, online courses stood at 34%, while printed textbooks stood at 52% and face-to-face classes at 58%.”",
 exp:"Đây là <b>liệt kê số liệu</b>, thuộc về body chứ không phải overview. Overview nêu <i>cấu trúc</i> của dữ liệu, không nêu từng con số. Một dấu hiệu nhận biết: nếu câu có từ 3 con số trở lên, gần như chắc chắn nó không thuộc overview."}
]},

{t:"quiz",title:"So sánh và số liệu · Sửa 10 câu",tag:"Grammar",kind:"free",
instr:"Sửa lỗi trong các câu sau. Đây là nhóm lỗi khiến bài Task 1 mất điểm Grammatical Range & Accuracy nhiều nhất.",
items:[
{q:"Online courses increased from 12% in 2012 and 81% in 2026.",model:"Online courses increased from 12% in 2012 to 81% in 2026.",exp:"Cặp giới từ cố định: <i>from X <b>to</b> Y</i>. Không bao giờ dùng <i>and</i>."},
{q:"The figure of textbooks was decreased steadily.",model:"The figure for textbooks decreased steadily.",exp:"Hai lỗi: <i>the figure <b>for</b></i> (không phải <i>of</i>), và <i>decrease</i> là <b>nội động từ</b> — không có dạng bị động."},
{q:"Face-to-face classes were more stable than online courses did.",model:"Face-to-face classes were more stable than online courses were. (hoặc bỏ hẳn: …than online courses.)",exp:"Trợ động từ ở vế sau phải khớp với <i>were</i>, không dùng <i>did</i>."},
{q:"University students spent 6.3 hours on media, which was highest than the other groups.",model:"University students spent 6.3 hours on media, the highest figure of any group. (hoặc: …which was higher than the figures for the other groups.)",exp:"Lẫn lộn so sánh hơn và so sánh nhất: <i>higher <b>than</b></i> hoặc <i>the highest <b>of/in</b></i> — không ghép <i>highest … than</i>."},
{q:"Streaming and games accounted 34% of spending in 2025.",model:"Streaming and games accounted for 34% of spending in 2025.",exp:"Thiếu <i>for</i>. Cụm cố định: <i>account <b>for</b> X%</i>."},
{q:"Car use in Riverton fell by 49% to 31%.",model:"Car use in Riverton fell from 49% to 31%. (hoặc: fell by 18 percentage points.)",exp:"Lẫn <i>by</i> (mức giảm) với <i>from…to</i> (điểm đầu–cuối). Khi cả hai đều là %, phải dùng <b>percentage points</b> cho mức chênh lệch."},
{q:"Northport and Riverton recorded 39% and 48% public transport users, respectably.",model:"Northport and Riverton recorded 39% and 48% public transport use respectively.",exp:"<i>respectably</i> (đáng kính) ≠ <i>respectively</i> (theo thứ tự). Lỗi chính tả này rất phổ biến."},
{q:"The number for speaking practice was fewer than two hours.",model:"The figure for speaking practice was less than two hours.",exp:"<i>hours</i> ở đây là một lượng thời gian → <i>less than</i>. Và <i>the figure for</i> tự nhiên hơn <i>the number for</i>."},
{q:"Online learning saw a dramatically increase.",model:"Online learning saw a dramatic increase. (hoặc: Online learning increased dramatically.)",exp:"Sai dạng từ: trước danh từ <i>increase</i> cần tính từ <i>dramatic</i>."},
{q:"There was a rise of 69 percentage in online courses.",model:"There was a rise of 69 percentage points in online courses.",exp:"<i>percentage</i> không đứng một mình sau con số. Dùng <i>69 percentage points</i> (chênh lệch) hoặc <i>a rise of 69%</i> (tăng tương đối)."}
]},

{t:"writing",title:"Bài Task 1",tag:"Writing",
prompt:"Viết một báo cáo 160–190 từ. Mức nền tảng: dùng hình A hoặc D. Mức mở rộng: dùng hình B hoặc C và so sánh nhiều nhóm dữ liệu trong cùng một câu.",
instr:"Cách trình bày từng cột hoặc từng phần riêng lẻ sẽ làm báo cáo thiếu tính khái quát. Cấu trúc: <b>Introduction (paraphrase) → Overview 2 câu → Body 1 (nhóm 1) → Body 2 (nhóm 2)</b>.",
check:["Không nêu quan điểm cá nhân.","Không giải thích nguyên nhân nếu hình không cung cấp thông tin.","Đơn vị và năm được ghi chính xác.","Overview không chứa một danh sách số liệu dày đặc.","Thì quá khứ được dùng cho giai đoạn đã kết thúc.","Các cấu trúc so sánh chính xác.","Động từ <i>increased</i> không bị lặp trong mọi câu."],
model:`<b>Bài mẫu cho Hình A — Preferred Learning Methods over Time (~180 từ):</b><br>
The line graph illustrates changes in the learning methods preferred by students between 2012 and 2026, with figures expressed as percentages.<br><br>
Overall, online courses rose dramatically to become the dominant learning method, whereas printed textbooks experienced a sustained decline. Face-to-face classes were considerably more stable and remained the second most common option at the end of the period.<br><br>
In 2012, printed textbooks were the most widely used resource, accounting for roughly two thirds of responses, while online courses were chosen by only around one student in eight. The two figures moved in opposite directions from that point onwards. Online learning climbed steadily until 2018 and then increased sharply, overtaking textbooks at some point around 2020 and reaching just over 80 per cent by 2026.<br><br>
Face-to-face classes followed a very different pattern. Their share fluctuated within a narrow range for the entire period, ending only marginally below where it began at just over half. Printed textbooks, by contrast, fell to a low of under 20 per cent, meaning that the gap between the most and least popular methods widened considerably over the fourteen years.<br>
<span style="color:var(--tx2)">Ghi chú: hãy thay số liệu bằng con số thực tế trên hình trong PDF. Điều đáng học ở đây là <b>cấu trúc</b> và <b>ngôn ngữ so sánh</b>, không phải các con số.</span>`},

{t:"note",title:"Ngân hàng ngôn ngữ Task 1",tag:"Vocabulary",html:`
<table class="vt">
<tr><th>Xu hướng</th><th>So sánh</th><th>Tỉ trọng</th></tr>
<tr><td>
rose steadily from X to Y<br>increased sharply after 2018<br>declined throughout the period<br>fell to a low of<br>remained relatively stable<br>fluctuated within a narrow range<br>peaked at<br>recovered slightly
</td><td>
was roughly twice as high as<br>exceeded the figure for<br>remained well below<br>the gap widened from X to Y<br>the two figures were broadly similar<br>respectively<br>by contrast<br>while / whereas
</td><td>
accounted for<br>made up<br>represented<br>together comprised<br>the largest / smallest proportion
</td></tr></table>`},

{t:"vocab",title:"Ngân hàng cụm từ về số liệu",tag:"Vocabulary",items:[
["a noticeable upward trend","xu hướng tăng rõ","Online learning showed a noticeable upward trend."],
["a sustained decline","giảm kéo dài","Printed materials experienced a sustained decline."],
["remain broadly stable","nhìn chung ổn định","Classroom learning remained broadly stable."],
["a narrow margin","khoảng cách nhỏ","The two groups were separated by a narrow margin."],
["the gap widened","khoảng cách gia tăng","The gap widened considerably after 2021."],
["account for the largest share","chiếm tỷ trọng lớn nhất","Streaming accounted for the largest share."],
["an exception to the pattern","ngoại lệ của xu hướng","Healthcare was the main exception to the pattern."],
["select key features","chọn đặc điểm chính","Candidates must select key features rather than list every value."],
["group data logically","nhóm số liệu hợp lý","The report groups data logically by trend."],
["exaggerate a difference","phóng đại khác biệt","A narrow scale can exaggerate a difference."],
["put a figure in context","đặt số liệu vào bối cảnh","Actual totals put a percentage in context."],
["a longer-term trend","xu hướng dài hạn","The short rise did not change the longer-term trend."]
]},

{t:"speaking",title:"Vận dụng vào Speaking",tag:"Speaking",parts:[
{label:"Part 1",qs:[
["Do you often look at graphs or statistics?","More than I used to, mostly in news articles. I've become slightly more sceptical though — I now check what the vertical axis actually starts at, because a chart beginning at ninety-five can make a tiny rise look dramatic."],
["Are you good at remembering numbers?","Not particularly. I can remember the shape of a trend far more easily than the exact figures, which is probably why I prefer graphs to tables."],
["Did you enjoy mathematics at school?","Not at the time, honestly, mainly because it was taught as procedure rather than reasoning. I've come to appreciate it much more since — especially anything involving percentages, which turns out to be one of the most useful things I was ever taught."],
["Where do you normally get information about social trends?","A mixture of news sites and official statistics offices. I try to check the actual totals alongside the percentages when I can, because 'doubled' sounds powerful until you realise it means a rise from one to two."]
]},
{label:"Part 2 · Cue card",qs:[
["Describe a piece of information that surprised you. — what it was · where you found it · why it surprised you · and whether it changed your opinion",
"The piece of information I'd like to describe was a statistic about commuting that I came across in a newspaper article maybe two years ago. It claimed that the average commute in my city had risen by almost forty per cent over a decade, which sounded alarming, and my first reaction was exactly the one the headline was designed to produce. What made it interesting was what happened when I looked at the chart underneath. The vertical axis didn't start at zero, and the period chosen began at an unusually low point — a year when a major road had been closed and far fewer people were driving. Over a longer window, the increase was real but much more modest. So the surprise, in the end, wasn't the number itself; it was how easily a graph had led me to a conclusion I hadn't examined. Did it change my opinion? Not about commuting, particularly. But it changed how I read charts. I now check the starting point, the end point and whether the selected period represents the longer trend before I accept what a figure appears to show — which is a habit that's turned out to be useful well beyond newspapers."]
]},
{label:"Part 3",qs:[
["Why can statistics be misleading?","Usually not because the numbers are false, but because of how they're framed. Scale is the obvious mechanism — an axis starting at ninety-five can exaggerate a difference that's genuinely trivial. Grouping is subtler: combining walking and cycling into 'active travel' can create a completely different ranking from separating them, and neither choice is dishonest in itself. The question is whether the grouping helps a reader see the issue or hides a pattern that deserves attention."],
["Should schools teach data literacy?","I'd argue it's now close to essential, because almost every public argument is conducted with numbers. And the core skills are teachable in a few lessons: read percentages alongside actual totals, check the time period, notice when an average is hiding large differences between groups. The limitation is that it needs to sit inside mathematics rather than becoming another separate subject, otherwise it just places more pressure on the timetable."],
["Do people trust numbers too easily?","I think so, and the reason is almost aesthetic — precision looks like objectivity. A figure of 42.6 per cent feels more authoritative than 'about two fifths', even when the underlying data are identical. That said, I'd be careful not to swing to the opposite extreme; treating all statistics as manipulation is just as lazy as accepting them uncritically. The useful position is to ask who selected the data and what was left out."]
]}
]},

{t:"note",title:"Sản phẩm — Ngày 6",tag:"Checklist",html:`
<ul class="tips checklist">
<li>Ghi chú quan sát cho <b>bốn hình</b> (6 mục mỗi hình)</li>
<li>Sáu câu overview</li>
<li>Một dàn ý phân nhóm</li>
<li>Một báo cáo Task 1 hoàn chỉnh</li>
<li>Mười câu số liệu đã được sửa</li>
</ul>
<div class="model" style="border-color:#7a4a2f;background:rgba(240,169,46,.07)"><span class="lb" style="color:var(--warn)">Lưu ý</span>
Task 1 yêu cầu người viết <b>chọn lọc</b> thông tin. Một overview hiệu quả nêu được đặc điểm chính và lược bỏ số liệu vụn.</div>`}
]}
;
