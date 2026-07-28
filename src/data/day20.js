const TF  = ["TRUE","FALSE","NOT GIVEN"];
const YN  = ["YES","NO","NOT GIVEN"];
const PARA_AI = ["A","B","C","D","E","F","G","H","I"];
const H2 = [
  "I. Privacy and the cost of administration",
  "II. The economic logic behind a charge",
  "III. Why every driver will stop using a car",
  "IV. Different responses to the same price signal",
  "V. Designing a charge without destroying its effect",
  "VI. How visible outcomes may change public opinion",
  "VII. Fairness depends on more than income",
  "VIII. The need to build roads before introducing fees",
  "IX. A policy suitable for every community"
];
const PROJECTS = ["A. Coastal Watch","B. Night Sky Count","C. Urban Pollinator Map"];
export default
{
id:20, title:"Ngày 20 — Thi thử IELTS",
focus:"Buổi thi thử mô phỏng quá trình làm bài liền mạch: chuẩn bị thời gian, không gian và dụng cụ trước khi bắt đầu, giữ đúng giới hạn, không tra cứu.",
blocks:[

{t:"note",title:"Định hướng học tập",tag:"Hướng dẫn",html:`
<p>Buổi thi thử mô phỏng quá trình làm bài liền mạch. Trong lúc làm, hãy giữ đúng giới hạn đã đặt ra, <b>không tra cứu</b> và không dùng trợ giúp bên ngoài để sửa bài. Sau buổi mô phỏng, phần rà soát cần ghi rõ quyết định nào đã giúp tiết kiệm thời gian và thời điểm nào khiến chất lượng giảm. Dữ liệu này sẽ định hướng cho kế hoạch ngày cuối.</p>
<div class="model" style="margin-top:12px"><span class="lb">Mục tiêu</span>
Hôm nay là buổi kiểm tra <b>độ ổn định của kỹ năng dưới áp lực thời gian</b>. Người học làm bài liên tục, không tra từ, không dừng quá lâu ở một câu và giữ đúng thời lượng đã đặt ra. Điều kiện luyện tập cần gần với bài thi thật thì kết quả đánh giá mới đáng tin cậy.</div>
<p class="instr" style="margin-top:10px">Sản phẩm chính: một buổi thi thử IELTS hoàn chỉnh (không gồm Listening), kèm báo cáo kết quả.</p>`},

{t:"note",title:"Quy tắc của buổi thi thử",tag:"Hướng dẫn",html:`
<h4>Thứ tự thực hiện</h4>
<div class="tablewrap"><table class="vt">
<tr><th>#</th><th>Phần</th><th>Thời lượng</th></tr>
<tr><td class="ph">1</td><td>Academic Reading — 40 câu hỏi</td><td>60 phút</td></tr>
<tr><td class="ph">2</td><td>Nghỉ</td><td>15–20 phút</td></tr>
<tr><td class="ph">3</td><td>Academic Writing — Task 1 + Task 2</td><td>60 phút</td></tr>
<tr><td class="ph">4</td><td>Nghỉ</td><td>10 phút</td></tr>
<tr><td class="ph">5</td><td>Bài thi thử Speaking (có ghi âm)</td><td>11–14 phút</td></tr>
</table></div>
<h4 style="margin-top:14px">Điều kiện thực hiện</h4>
<ul class="tips">
<li>Điện thoại ở chế độ máy bay, chỉ dùng để bấm giờ và ghi âm.</li>
<li><b>Không</b> dùng từ điển, ứng dụng dịch hoặc công cụ AI.</li>
<li><b>Không</b> tạm dừng đồng hồ.</li>
<li>Ghi đầy đủ đáp án Reading trước khi hết 60 phút.</li>
<li>Hoàn thành cả hai bài Writing.</li>
<li>Ghi phần Speaking liên tục trong <b>một tệp</b>.</li>
<li>Tách lỗi do áp lực khỏi lỗi do thiếu kiến thức.</li>
</ul>
<div class="model" style="margin-top:12px"><span class="lb">Mức 90 phút (phiên bản rút gọn)</span>
Người học chưa thể hoàn thành toàn bộ buổi thi thử có thể thực hiện: Bài đọc 1 và Bài đọc 2 trong 40 phút · Task 2 trong 40 phút · bài thi thử Speaking đầy đủ.<br>
Phiên bản rút gọn cần được <b>ghi đúng tên</b> để kết quả các lần luyện còn có thể so sánh. Cách ghi trung thực về điều kiện làm bài là một phần của độ chính xác khi tự đánh giá.</div>`},

{t:"passage",title:"Bài đọc 1",subtitle:"Repair Culture and the Return of Maintenance",paras:[
["A","For much of human history, repairing an object was an ordinary part of ownership. Clothes were altered, tools were sharpened, furniture was restored and mechanical devices were opened by local specialists who understood how individual parts worked. This was partly a matter of culture, but it was also economic necessity. Manufactured goods were relatively expensive, supply chains were slower and replacement could cost a substantial share of household income. Skills of maintenance therefore had visible value."],
["B","The expansion of mass production changed this relationship. Standardised manufacturing made many products cheaper, while international distribution placed new goods within easy reach of consumers. As prices fell, repair sometimes became financially irrational. A technician might charge almost as much to diagnose and fix a small appliance as a shop charged for a replacement. At the same time, advertising encouraged buyers to associate newer models with progress, style and personal identity. Disposal was no longer simply the result of physical failure. It became connected to changing expectations."],
["C","Product design has also affected repair. Some modern devices use glued cases, specialised screws or components fixed together in a way that prevents individual replacement. Batteries may be difficult to remove, and software can restrict a new component unless it is recognised by the manufacturer. These choices can make products thinner, safer or more resistant to water, so it is too simple to assume that every sealed design is intended to force a new purchase. Nevertheless, the practical result is often the same: independent repair becomes difficult or uneconomical."],
["D","The right-to-repair movement emerged in response to these barriers. Campaigners argue that owners and independent technicians should be able to obtain spare parts, diagnostic information, software tools and repair manuals on reasonable terms. Their claim is not that every consumer must personally open a complex device. Rather, ownership should include the realistic possibility of choosing who repairs it. Without access to information and compatible parts, a local technician may be prevented from fixing a product even when the physical problem is minor."],
["E","Manufacturers raise several objections. Incorrect repair can create electrical, medical or mechanical risks. Opening a product may expose personal data or weaken security features. Companies also argue that unrestricted access to software and design information can threaten intellectual property. These concerns are not imaginary. A badly repaired battery, vehicle or medical device can cause serious harm. The difficult policy question is therefore how to provide access while preserving safety, cybersecurity and clear responsibility when something goes wrong."],
["F","Community repair cafés offer one response at a smaller scale. Volunteers help visitors mend household objects, bicycles, clothing and electronics, often without charging for labour. Their environmental effect is modest compared with industrial waste systems, but their social value can be larger than the number of objects saved. Participants exchange practical knowledge, older residents pass on skills, and people begin to see broken products as understandable objects rather than sealed mysteries. Such events cannot repair every advanced device, yet they can restore confidence in maintenance."],
["G","Environmental arguments for repair also require care. Extending the life of a product usually reduces demand for new materials and manufacturing, but repair is not automatically the greener choice in every case. An old refrigerator that consumes very large amounts of electricity may have a higher lifetime impact than a more efficient replacement. Transporting a heavy product long distances for specialised repair can also create emissions. A responsible assessment considers manufacturing, energy use, transport, expected lifespan and the availability of parts rather than treating repair as a moral absolute."],
["H","Policy is beginning to move beyond simple slogans. Some proposals require manufacturers to publish repairability scores, provide parts for a minimum period or design products so that common components can be replaced. Digital product records may eventually show materials, repair history and compatible parts. However, rules can fail if replacement components are technically available but priced so high that repair remains unrealistic. Effective policy must consider information, design, price and the training of technicians together."],
["I","The revival of repair does not mean returning to a romantic past in which every object lasted forever. Modern products are more complex, and some failures genuinely require specialist control. The stronger principle is that disposal should not be the default response to a minor fault simply because knowledge and parts have been withheld. A repair culture gives consumers another option. Whether they use it should depend on evidence about cost, safety and environmental impact, not on a system that makes the choice impossible from the beginning."]
]},

{t:"quiz",title:"Questions 1–6 · True / False / Not Given",tag:"Reading",
instr:"TRUE nếu nhận định phù hợp với bài đọc, FALSE nếu trái với bài đọc, NOT GIVEN nếu bài không cung cấp đủ thông tin.",
shared:TF,start:1,items:[
{q:"In the past, the high relative cost of manufactured goods made repair economically valuable.",a:0,
 ev:"Đoạn A: “Manufactured goods were relatively expensive… Skills of maintenance therefore had visible value.”",
 exp:"Paraphrase trực tiếp: <i>relatively expensive</i> ↔ <i>high relative cost</i>, <i>visible value</i> ↔ <i>economically valuable</i>."},
{q:"The passage says consumers became less willing to repair products solely because they grew lazy.",a:1,
 ev:"Đoạn B: “repair sometimes became financially irrational… advertising encouraged buyers to associate newer models with progress, style and personal identity.”",
 exp:"Bài nêu lý do <b>kinh tế và quảng cáo</b>, không nói do lười. Bẫy <i>solely</i> (tuyệt đối) + lý do bịa → FALSE."},
{q:"Every sealed product is deliberately designed to make consumers buy a replacement.",a:1,
 ev:"Đoạn C: “…it is too simple to assume that every sealed design is intended to force a new purchase.”",
 exp:"Bài <b>bác bỏ thẳng</b> nhận định này. <i>Every</i> là bẫy tuyệt đối kinh điển → FALSE."},
{q:"Right-to-repair campaigners want independent technicians to have reasonable access to manuals and parts.",a:0,
 ev:"Đoạn D: “…owners and independent technicians should be able to obtain spare parts, diagnostic information, software tools and repair manuals on reasonable terms.”",
 exp:"Khớp gần như nguyên văn, kể cả cụm <i>on reasonable terms</i> ↔ <i>reasonable access</i>."},
{q:"The passage states that manufacturers’ safety objections are entirely dishonest.",a:1,
 ev:"Đoạn E: “These concerns are not imaginary. A badly repaired battery, vehicle or medical device can cause serious harm.”",
 exp:"Bài công nhận lo ngại là <b>có thật</b>. <i>entirely dishonest</i> trái ngược hoàn toàn → FALSE."},
{q:"Repairing an old product always causes less environmental damage than replacing it.",a:1,
 ev:"Đoạn G: “…repair is not automatically the greener choice in every case. An old refrigerator that consumes very large amounts of electricity may have a higher lifetime impact…”",
 exp:"Bài phủ định trực tiếp. Bẫy <i>always</i> → FALSE."}
]},

{t:"quiz",title:"Questions 7–10 · Matching Information",tag:"Reading",col:true,
instr:"Đoạn nào chứa thông tin sau? Chọn chữ cái A–I. Một đoạn có thể được dùng nhiều lần hoặc không dùng.",
shared:PARA_AI,start:7,items:[
{q:"A community benefit that extends beyond the number of products repaired",a:5,
 ev:"Đoạn F: “Their environmental effect is modest… but their social value can be larger than the number of objects saved.”",
 exp:"<i>social value larger than the number of objects saved</i> ↔ <i>benefit beyond the number of products repaired</i> → F."},
{q:"A reason a new component may not work even when it physically fits",a:2,
 ev:"Đoạn C: “…software can restrict a new component unless it is recognised by the manufacturer.”",
 exp:"Vừa vặn về cơ khí nhưng bị <b>phần mềm</b> chặn — chỉ đoạn C nói tới cơ chế này → C."},
{q:"A warning that nominal access to parts may still be ineffective",a:7,
 ev:"Đoạn H: “…rules can fail if replacement components are technically available but priced so high that repair remains unrealistic.”",
 exp:"<i>technically available but priced so high</i> ↔ <i>nominal access… still ineffective</i> → H."},
{q:"The idea that ownership should include a choice of repair provider",a:3,
 ev:"Đoạn D: “Rather, ownership should include the realistic possibility of choosing who repairs it.”",
 exp:"Khớp nguyên văn <i>ownership should include</i> + <i>choosing who repairs it</i> → D."}
]},

{t:"gap",title:"Questions 11–13 · Sentence Completion",tag:"Reading",start:11,
instr:"Hoàn thành câu bằng KHÔNG QUÁ HAI TỪ lấy từ bài đọc.",items:[
{q:"Advertising connected newer products with progress, style and personal ______.",a:["identity"],
 ev:"Đoạn B: “…associate newer models with progress, style and personal identity.”",
 exp:"Danh sách ba thành phần được giữ nguyên trật tự — chỉ cần lấy từ cuối."},
{q:"Repair policy must protect safety, cybersecurity and clear ______.",a:["responsibility"],
 ev:"Đoạn E: “…while preserving safety, cybersecurity and clear responsibility when something goes wrong.”",
 exp:"Lại là danh sách ba thành phần. <i>preserving</i> ↔ <i>protect</i>."},
{q:"A complete environmental assessment should include manufacturing, energy use, transport and expected ______.",a:["lifespan"],
 ev:"Đoạn G: “A responsible assessment considers manufacturing, energy use, transport, expected lifespan and the availability of parts…”",
 exp:"Cụm cố định <i>expected lifespan</i>. Giới hạn hai từ nên không thể thêm <i>and availability</i>."}
]},

{t:"passage",title:"Bài đọc 2",subtitle:"Paying for Congestion",paras:[
["A","Traffic congestion is often described as a shortage of road capacity, leading governments to build wider roads or additional routes. Yet new capacity can attract journeys that were previously avoided, delayed or made by another mode. Over time, traffic may rise until the improved road is crowded again. This pattern, sometimes called induced demand, suggests that congestion is not only an engineering problem. It is also a problem of how limited road space is allocated."],
["B","Road pricing begins with a simple economic idea: when a resource is scarce and free at the point of use, demand can exceed the amount available. A driver entering a crowded city centre imposes costs on others by adding delay, pollution and noise. These costs are not fully reflected in the private price of the journey. A congestion charge attempts to make part of that social cost visible, particularly during times and in places where road space is under greatest pressure."],
["C","The effect of a charge depends heavily on design. A flat daily fee may discourage occasional visitors but have little influence on a high-income commuter who drives every day. A charge that varies by time, location or vehicle type can target congestion more precisely, although it becomes harder for the public to understand. Exemptions may be necessary for emergency vehicles, people with severe mobility needs or workers whose schedules fall outside public transport hours. Too many exemptions, however, can weaken the system."],
["D","Critics frequently raise fairness. A fee that is minor for a wealthy driver can be significant for a lower-income worker. However, income alone does not reveal who benefits or loses. In many cities, lower-income residents are less likely to drive into the centre and more likely to depend on buses. If charge revenue improves public transport, they may gain even without paying the fee. Conversely, a low-paid night worker with no reliable alternative may carry a disproportionate burden. Fairness therefore depends on travel patterns and how the revenue is used."],
["E","Behavioural response is rarely uniform. Some drivers change departure time, combine trips or switch to public transport. Others continue driving and pay. Businesses may alter delivery schedules, while employers may introduce flexible hours. The most successful schemes do not require every journey to disappear. Even a modest reduction in traffic at the busiest point can improve flow because congested networks often operate close to their physical limit."],
["F","Public acceptance can change after introduction. Before a scheme begins, people focus on the visible cost they may have to pay. Potential benefits such as more reliable buses, cleaner air or shorter travel times feel uncertain. Once those benefits become observable, opposition may decline. This is not guaranteed. Acceptance is more likely when the purpose is clear, the charge is easy to understand and the revenue is visibly returned to transport improvements rather than absorbed into a general budget."],
["G","Technology makes complex charging possible but creates new concerns. Cameras or location data can identify vehicles, calculate fees and enforce payment. The same system may reveal where and when individuals travel. Strong limits on data retention, access and secondary use are therefore essential. Administrative cost also matters. A theoretically perfect scheme that consumes a large share of revenue in operation may deliver less public value than a simpler design."],
["H","Road pricing is not a universal answer. Small towns with light traffic have little reason to introduce it, and cities without credible transport alternatives risk charging people for a choice they do not genuinely possess. Nor can pricing replace good land-use planning, safe walking routes or reliable public transport. Its value lies in managing the most crowded roads while generating resources for alternatives. The policy works best as one part of a wider mobility system rather than as punishment for drivers."]
]},

{t:"quiz",title:"Questions 14–19 · Matching Headings",tag:"Reading",col:true,
instr:"Chọn heading đúng cho các đoạn B–G. Có nhiều heading hơn số đoạn.",
shared:H2,start:14,items:[
{q:"Paragraph B",a:1,
 ev:"Đoạn B: “Road pricing begins with a simple economic idea: when a resource is scarce and free at the point of use, demand can exceed the amount available.”",
 exp:"Toàn đoạn trình bày <b>logic kinh tế</b> của phí (khan hiếm + miễn phí → vượt cầu) → II."},
{q:"Paragraph C",a:4,
 ev:"Đoạn C: “The effect of a charge depends heavily on design… Too many exemptions, however, can weaken the system.”",
 exp:"Đoạn bàn cách <b>thiết kế</b> phí sao cho không mất hiệu lực → V. Bẫy: đoạn có nhắc <i>occasional visitors</i> nhưng đó không phải ý chính."},
{q:"Paragraph D",a:6,
 ev:"Đoạn D: “However, income alone does not reveal who benefits or loses… Fairness therefore depends on travel patterns and how the revenue is used.”",
 exp:"Khớp trực tiếp <i>income alone does not reveal</i> ↔ <i>more than income</i> → VII."},
{q:"Paragraph E",a:3,
 ev:"Đoạn E: “Behavioural response is rarely uniform. Some drivers change departure time… Others continue driving and pay.”",
 exp:"Cùng một tín hiệu giá nhưng <b>phản ứng khác nhau</b> → IV. Bẫy III (<i>every driver will stop</i>) trái ngược với <i>Others continue driving</i>."},
{q:"Paragraph F",a:5,
 ev:"Đoạn F: “Once those benefits become observable, opposition may decline.”",
 exp:"<i>benefits become observable</i> ↔ <i>visible outcomes</i>; <i>opposition may decline</i> ↔ <i>change public opinion</i> → VI."},
{q:"Paragraph G",a:0,
 ev:"Đoạn G: “The same system may reveal where and when individuals travel… Administrative cost also matters.”",
 exp:"Đoạn gộp đúng <b>hai</b> ý: quyền riêng tư + chi phí vận hành → I."}
]},

{t:"quiz",title:"Questions 20–23 · Multiple Choice",tag:"Reading",start:20,
instr:"Chọn đáp án đúng A, B, C hoặc D.",items:[
{q:"What is the main point of Paragraph A?",opts:["Road construction never increases capacity.","Congestion can return because added road space changes travel behaviour.","Engineers deliberately underestimate future traffic.","Drivers prefer delayed journeys to public transport."],a:1,
 ev:"Đoạn A: “new capacity can attract journeys that were previously avoided, delayed or made by another mode. Over time, traffic may rise until the improved road is crowded again.”",
 exp:"Đây chính là <i>induced demand</i>. A sai vì bẫy tuyệt đối <i>never</i> — bài nói đường mới <b>có</b> tăng năng lực, chỉ là bị lấp đầy trở lại."},
{q:"According to Paragraph C, a charge that varies by time and location",opts:["is always more popular with the public.","makes all exemptions unnecessary.","can target congestion more accurately but is more complex.","mainly affects occasional visitors."],a:2,
 ev:"Đoạn C: “A charge that varies by time, location or vehicle type can target congestion more precisely, although it becomes harder for the public to understand.”",
 exp:"C giữ đúng cả hai vế <b>lợi ích + đánh đổi</b>. A đảo ngược (khó hiểu hơn, không phổ biến hơn); D mô tả <i>flat daily fee</i>."},
{q:"Why might some lower-income residents benefit from road pricing?",opts:["They are automatically exempt from every charge.","Revenue may improve the public transport they use.","Businesses will pay their commuting costs.","Road pricing reduces the price of fuel."],a:1,
 ev:"Đoạn D: “In many cities, lower-income residents are… more likely to depend on buses. If charge revenue improves public transport, they may gain even without paying the fee.”",
 exp:"Cơ chế gián tiếp: không trả phí nhưng hưởng lợi từ nguồn thu. A là bẫy tuyệt đối <i>automatically… every</i>."},
{q:"The writer suggests that successful schemes",opts:["must remove every car journey at peak time.","work because congested networks can improve after a relatively small traffic reduction.","require employers to ban fixed working hours.","depend mainly on increasing delivery traffic."],a:1,
 ev:"Đoạn E: “The most successful schemes do not require every journey to disappear. Even a modest reduction in traffic at the busiest point can improve flow…”",
 exp:"A là bẫy TRÁI NGƯỢC trực tiếp (<i>do not require every journey to disappear</i>). C bóp méo <i>may introduce flexible hours</i> thành <i>ban</i>."}
]},

{t:"gap",title:"Questions 24–26 · Short Answer",tag:"Reading",start:24,
instr:"Trả lời bằng KHÔNG QUÁ BA TỪ lấy từ bài đọc.",items:[
{q:"What kind of budget should charge revenue not simply disappear into?",a:["a general budget","general budget","general"],
 ev:"Đoạn F: “…the revenue is visibly returned to transport improvements rather than absorbed into a general budget.”",
 exp:"<i>absorbed into</i> ↔ <i>disappear into</i>. Câu hỏi <i>What kind of</i> → cần tính từ <b>general</b>."},
{q:"What type of data may reveal where and when individuals travel?",a:["location data","location"],
 ev:"Đoạn G: “Cameras or location data can identify vehicles… The same system may reveal where and when individuals travel.”",
 exp:"Lấy đúng cụm danh từ <i>location data</i>, không lấy <i>cameras</i> vì đó không phải “data”."},
{q:"What must a city offer before charging people for driving becomes credible?",a:["credible transport alternatives","transport alternatives","alternatives"],
 ev:"Đoạn H: “…cities without credible transport alternatives risk charging people for a choice they do not genuinely possess.”",
 exp:"Câu gốc ở dạng phủ định (<i>without</i>) — cần đảo lại thành khẳng định. Giới hạn ba từ vừa đủ."}
]},

{t:"passage",title:"Bài đọc 3",subtitle:"Citizen Science — More Than Free Data?",paras:[
["A","Scientific research is often imagined as work conducted by trained specialists inside laboratories or universities. Yet members of the public have long contributed observations of weather, wildlife, stars and local environments. The modern term citizen science covers projects in which volunteers take part in collecting, classifying or sometimes interpreting data. Digital tools have expanded the scale of participation, allowing thousands of people to submit observations through phones and online platforms."],
["B","The obvious advantage is reach. A small research team cannot be present across an entire country every day, but a large network of volunteers can record seasonal change, animal movement or air quality across many locations. This is particularly valuable when the research question depends on repeated observation rather than one highly specialised measurement. The resulting dataset may reveal patterns that would remain invisible in a small professional sample."],
["C","Large quantity does not guarantee reliable data. Volunteers differ in experience, equipment and attention. They may record common species accurately but misidentify rare ones, or submit more observations from attractive and easily reached places. Researchers address these problems through training, photographs, repeated observations and statistical checks. Some projects send unusual records to experts for verification. The aim is not to pretend volunteer data are perfect, but to understand and manage their limitations."],
["D","One project, Coastal Watch, asks volunteers to photograph sections of shoreline after storms. Images are taken from marked positions so that erosion and debris can be compared over time. The task requires little specialist knowledge, but consistent location and angle are essential. Researchers use the photographs to identify beaches needing detailed professional surveys. Volunteers therefore act as an early-warning network rather than replacing coastal scientists."],
["E","Night Sky Count uses a different model. Participants compare the stars visible from their location with reference charts, producing an estimate of light pollution. Individual estimates are imprecise, but thousands of reports can show broad geographical patterns. Because the activity can be completed from a garden or street, it reaches people who might never join a formal astronomy organisation. The project also makes an invisible environmental issue easier to understand."],
["F","Urban Pollinator Map requires more interpretation. Volunteers photograph bees, butterflies and other insects visiting flowers, then propose an identification. Other participants and experts review the image. This layered process turns disagreement into part of the method. A mistaken label is not simply deleted; it may become an opportunity to explain which physical feature distinguishes two similar species."],
["G","Participation is not maintained by scientific purpose alone. Volunteers are more likely to remain involved when they receive feedback, see how their observations contribute and feel part of a community. Projects that collect data without communicating results can create the impression that the public is being used as unpaid labour. Recognition does not need to involve money, but it should make contribution visible and meaningful."],
["H","Ethical questions become more serious when observations concern private land, health or human behaviour. A photograph of an insect may accidentally include a person or reveal the precise location of a rare species vulnerable to collection. Health projects may gather sensitive information. Organisers must explain how data will be stored, shared and anonymised. Enthusiasm for open science does not remove the need for privacy and informed consent."],
["I","Citizen science can also influence trust. When people participate in measurement, they may understand more clearly why scientific conclusions include uncertainty and why methods matter. However, participation does not automatically produce agreement. Volunteers may distrust a project if researchers ignore local knowledge or communicate only after decisions have already been made. Respectful collaboration requires scientists to treat public contributors as partners with experience, not merely as inexpensive sensors."],
["J","The strongest citizen-science projects are therefore designed around a suitable relationship between task and participant. Volunteers can provide extraordinary geographical coverage, local knowledge and repeated observation. Professionals remain essential for research design, advanced measurement, verification and interpretation. The question is not whether public participation is as good as professional science in every respect. It is which parts of a scientific problem can be opened to wider participation without sacrificing quality, ethics or honesty about uncertainty."]
]},

{t:"quiz",title:"Questions 27–32 · Yes / No / Not Given",tag:"Reading",
instr:"Các nhận định sau có phù hợp với quan điểm của tác giả không? YES nếu phù hợp, NO nếu trái ngược, NOT GIVEN nếu tác giả không nêu quan điểm.",
shared:YN,start:27,items:[
{q:"Citizen science began only after smartphones became widely available.",a:1,
 ev:"Đoạn A: “Yet members of the public have long contributed observations of weather, wildlife, stars and local environments… Digital tools have expanded the scale of participation.”",
 exp:"Công nghệ số chỉ <b>mở rộng quy mô</b>, không khai sinh ra nó. <i>only after</i> là bẫy tuyệt đối → NO."},
{q:"Volunteer networks are especially useful when research requires observations across many places.",a:0,
 ev:"Đoạn B: “…a large network of volunteers can record seasonal change, animal movement or air quality across many locations.”",
 exp:"Khớp trực tiếp <i>across many locations</i> ↔ <i>across many places</i> → YES."},
{q:"The writer believes that volunteer data should be accepted without expert checking.",a:1,
 ev:"Đoạn C: “Some projects send unusual records to experts for verification… understand and manage their limitations.”",
 exp:"Tác giả chủ trương <b>ngược lại</b>: cần kiểm định. → NO."},
{q:"Coastal Watch volunteers perform the same work as professional coastal scientists.",a:1,
 ev:"Đoạn D: “Volunteers therefore act as an early-warning network rather than replacing coastal scientists.”",
 exp:"<i>rather than replacing</i> phủ định trực tiếp nhận định → NO."},
{q:"Feedback can help projects keep volunteers involved.",a:0,
 ev:"Đoạn G: “Volunteers are more likely to remain involved when they receive feedback…”",
 exp:"Paraphrase gần nguyên văn: <i>remain involved</i> ↔ <i>keep involved</i> → YES."},
{q:"Every citizen-science participant becomes more trusting of scientific institutions.",a:1,
 ev:"Đoạn I: “However, participation does not automatically produce agreement. Volunteers may distrust a project if researchers ignore local knowledge…”",
 exp:"Tác giả nêu rõ có trường hợp <b>mất</b> niềm tin. Bẫy <i>Every</i> + <i>automatically</i> → NO."}
]},

{t:"gap",title:"Questions 33–37 · Summary Completion",tag:"Reading",start:33,
instr:"Hoàn thành bản tóm tắt bằng KHÔNG QUÁ HAI TỪ lấy từ bài đọc. Đọc cả đoạn tóm tắt trước khi điền để nắm mạch ý.",items:[
{q:"…while unusual records may be sent to ______.",a:["experts","expert"],
 ev:"Đoạn C: “Some projects send unusual records to experts for verification.”",
 exp:"Giữ nguyên số nhiều <i>experts</i> như trong bài."},
{q:"Coastal Watch controls comparison by asking participants to photograph from marked positions with a consistent location and ______.",a:["angle"],
 ev:"Đoạn D: “…consistent location and angle are essential.”",
 exp:"Danh sách hai thành phần — bản tóm tắt giữ lại từ đầu, cần điền từ thứ hai."},
{q:"In Urban Pollinator Map, disagreement can become part of the ______.",a:["method"],
 ev:"Đoạn F: “This layered process turns disagreement into part of the method.”",
 exp:"Khớp nguyên văn <i>part of the method</i>."},
{q:"Projects may lose participants when they fail to communicate results, making volunteers feel like unpaid ______.",a:["labour","labor"],
 ev:"Đoạn G: “…can create the impression that the public is being used as unpaid labour.”",
 exp:"Cụm cố định <i>unpaid labour</i>. Chấp nhận cả chính tả Mỹ <i>labor</i>."},
{q:"Organisers must also protect privacy and obtain informed ______ where necessary.",a:["consent"],
 ev:"Đoạn H: “Enthusiasm for open science does not remove the need for privacy and informed consent.”",
 exp:"Thuật ngữ cố định <i>informed consent</i> — rất hay xuất hiện trong bài về đạo đức nghiên cứu."}
]},

{t:"quiz",title:"Questions 38–40 · Matching Features",tag:"Reading",col:true,
instr:"Nối mỗi nhận định với dự án đúng.",
shared:PROJECTS,start:38,items:[
{q:"It uses comparison with prepared visual references.",a:1,
 ev:"Đoạn E: “Participants compare the stars visible from their location with reference charts…”",
 exp:"<i>reference charts</i> ↔ <i>prepared visual references</i> → Night Sky Count (B)."},
{q:"It sends researchers evidence that can indicate where specialist investigation is needed.",a:0,
 ev:"Đoạn D: “Researchers use the photographs to identify beaches needing detailed professional surveys.”",
 exp:"<i>beaches needing professional surveys</i> ↔ <i>where specialist investigation is needed</i> → Coastal Watch (A)."},
{q:"It uses community and expert review to improve identification.",a:2,
 ev:"Đoạn F: “Other participants and experts review the image.”",
 exp:"<i>other participants and experts</i> ↔ <i>community and expert review</i> → Urban Pollinator Map (C)."}
]},

{t:"writing",title:"Writing Task 1 · Line graph",tag:"Writing",
prompt:`The line graph shows the percentages of commuters in Eastford who used private cars, public transport, or walking and cycling as their main method of travel between 2005 and 2025.<br><br>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.<br><br><i>You should spend about 20 minutes on this task. Write at least 150 words.</i><br><br><img src="src/assets/pdf/day20-eastford-commuting.png" alt="Main commuting method in Eastford" style="max-width:100%;margin-top:10px;border-radius:8px">`,
instr:"Điền khung lập dàn ý trước khi viết: <b>highest throughout</b> · <b>strongest change</b> · <b>stable category</b> · <b>closest gap</b> · nhóm dữ liệu cho đoạn thân bài 1 · nhóm dữ liệu cho đoạn thân bài 2.",
check:["Overview nêu <b>hai đặc điểm chính</b> có giá trị khái quát","Dữ liệu được nhóm hợp lý, không kể lần lượt theo từng năm","Bài viết <b>không</b> tự thêm nguyên nhân hoặc ý kiến","Đơn vị và năm đều chính xác","Bài có ít nhất <b>hai phép so sánh trực tiếp</b>"],
model:`<b>Bài mẫu tham khảo (~180 từ):</b><br>
The line graph compares the proportions of commuters in Eastford travelling mainly by private car, by public transport, and on foot or by bicycle over a twenty-year period from 2005 to 2025.<br><br>
Overall, private cars remained the dominant method throughout the period, but their share declined markedly, while public transport rose steadily and narrowed the gap considerably by 2025. Walking and cycling stayed the smallest category and changed comparatively little.<br><br>
In 2005, private cars accounted for the clear majority of journeys, far ahead of the other two methods combined. This figure then fell consistently across the period, with the steepest decline occurring in the second decade. Public transport followed the opposite trend, climbing gradually at first and then more sharply, so that by 2025 the difference between it and private car use was substantially smaller than at any earlier point.<br><br>
Walking and cycling, by contrast, remained broadly stable, fluctuating within a narrow band and finishing the period at a level close to where it began. It therefore stayed the least common option throughout, despite the significant redistribution between the other two methods.<br><br>
<span class="lb">Lưu ý</span> Bài mẫu dùng ngôn ngữ xu hướng chứ không gắn số cụ thể, vì bạn cần đọc số từ biểu đồ. Khi viết thật, <b>bắt buộc</b> chèn số liệu và mốc năm chính xác.`},

{t:"writing",title:"Writing Task 2 · Opinion essay",tag:"Writing",
prompt:"Some people believe governments should spend more money on preventing illness than on treating people who are already ill.<br><br>To what extent do you agree or disagree?<br><br><i>You should spend about 40 minutes on this task. Write at least 250 words.</i>",
instr:"Dàn ý trong tám phút: <b>exact position</b> · <b>limiting comparison</b> (nhiều hơn cho phòng ngừa <i>so với</i> điều trị) · đoạn thân bài 1 · đoạn thân bài 2 · concession · một ví dụ thực tế cho mỗi đoạn · câu luận đề cuối.",
check:["Lập trường được giữ <b>nhất quán</b> từ mở bài đến kết luận","Bài viết đề cập <b>cả</b> biện pháp phòng ngừa và điều trị","Mỗi luận điểm đều có phần <b>giải thích cơ chế</b>","Ví dụ hợp lý và liên quan trực tiếp","Kết luận <b>không</b> đưa thêm ý mới"],
model:`<b>Bài mẫu tham khảo (~285 từ):</b><br>
It is often argued that public health budgets should be weighted towards prevention rather than treatment. I largely agree with this position, though I would resist the stronger claim that prevention should be funded at the expense of care for those already unwell.<br><br>
The central argument for prevention is one of leverage. A single preventive measure operates across an entire population before illness develops, whereas treatment addresses individuals after damage has occurred. Vaccination programmes, clean water systems and tobacco regulation illustrate this mechanism clearly: each removes a cause rather than managing a consequence, and the cost per person affected is therefore extremely low. A national programme reducing smoking rates, for instance, prevents thousands of future cases of cardiovascular and respiratory disease that would otherwise require decades of expensive intervention.<br><br>
Prevention also relieves pressure on hospitals in a way that additional treatment funding cannot. Health systems in many countries are constrained not by money alone but by staff and physical capacity. Reducing the number of people who become seriously ill is often the only realistic method of easing that pressure, since training specialists and building facilities takes many years.<br><br>
However, a government cannot simply redirect funds away from treatment. People who are already ill have an immediate and undeniable claim on public resources, and prevention offers them nothing. Moreover, some conditions are genetic or accidental and cannot be prevented at all. A policy that starved treatment budgets would therefore be both ethically indefensible and practically unworkable.<br><br>
On balance, I believe governments should shift the <i>balance</i> of new spending towards prevention, because it addresses causes and reduces future demand. This should represent a change in priority at the margin, not an abandonment of the obligation to treat those who are currently sick.`},

{t:"speaking",title:"Bài thi thử Speaking",tag:"Speaking",
instr:"Ghi toàn bộ bài thi trong <b>một tệp</b>. Nếu có thể, nhờ một người khác đọc câu hỏi nhưng <b>không</b> giải thích, sửa lỗi hoặc động viên trong thời gian thi.",
parts:[
{label:"Part 1 · Hometown and daily travel",qs:[
["What do you like most about your hometown?","Probably how walkable the older part of it is. The streets there were laid out long before anyone planned for cars, so everything is close together and you tend to run into people you know. That's something the newer districts, which were designed around roads, have completely lost."],
["Has your hometown changed much in recent years?","Quite a lot, and not evenly. The centre has been renovated and there's a new bus network, whereas the outer areas have mostly just grown without much planning. So depending on which part you visit, you'd get a very different impression of how fast the place is developing."],
["How do you usually travel around your city?","Mostly by bus, partly out of convenience and partly because parking has become genuinely difficult. If I'm going somewhere within a couple of kilometres I'll walk, which is often faster than it sounds once you account for waiting time."],
["Do you enjoy walking?","I do, though I've noticed I enjoy it far more when the route is pleasant. Walking along a river path feels restful; walking beside four lanes of traffic feels like something I'm enduring rather than choosing. The infrastructure makes more difference than the activity itself."],
["Is public transport convenient where you live?","Reasonably, during the day. The frequency drops off sharply in the evening, which is when it matters most for people finishing late shifts. So I'd say it's convenient for the average commuter but not for everyone who depends on it."],
["Do you think you will use a different form of transport in the future?","Very possibly. If the cycle lanes that were promised are actually built, I'd switch to a bicycle for most short journeys. At the moment the roads feel too dangerous for that, so the decision is being made for me by the infrastructure rather than by preference."]
]},
{label:"Part 2 · Cue card",qs:[
["Describe a public place that you think is well designed. — where it is · what it looks like · what people do there · and explain why you think it is well designed. (You have one minute to prepare. Speak for one to two minutes.)",
"I'd like to describe a riverside park about fifteen minutes from where I live, which I think is unusually well designed for a public space. It runs in a long strip along the water rather than forming a single block, so it connects several neighbourhoods instead of sitting inside just one of them. Physically, it's fairly simple: a wide paved path along the river, grass on the inland side, a lot of mature trees, and a few small pavilions with seating. There's a playground at one end and an open paved area at the other where people exercise in the mornings. What strikes me is the range of people using it simultaneously. Early on there are older residents doing tai chi; by mid-morning it's parents with young children; in the evening it fills with students and people commuting home on foot. The reason I consider it well designed is that it doesn't force those groups to compete for the same space. The path is wide enough for walkers and cyclists to coexist, and the seating is positioned so that noisy areas and quiet areas are naturally separated. It also has genuine shade, which sounds trivial but determines whether a park is usable for half the year. So it's not spectacular architecture — it's just a space that anticipated who would actually use it and when."]
]},
{label:"Part 3 · Public spaces and city planning",qs:[
["What makes a public space useful to different age groups?","I'd say the key is offering several kinds of activity without segregating them entirely. A space that only has a playground serves young families and nobody else. What works better is a design where an older person can sit in the shade while children play within sight — the groups aren't doing the same thing, but they're not excluded from each other either. Practical details matter enormously too: seating, shade and accessible toilets determine whether older people can stay for an hour or only pass through."],
["Why are some parks and public facilities underused?","Often it's a failure of connection rather than a failure of the facility itself. A park surrounded by fast roads with few safe crossings will be underused however good it is, because reaching it is unpleasant. Perceived safety is another factor — poor lighting or isolation can empty a space after dark. And sometimes facilities are simply built where land was available rather than where people actually live, which is a planning decision made for administrative convenience."],
["Should governments spend more on public spaces or housing?","Housing has to take priority where there's genuine shortage, because inadequate housing damages health and opportunity in ways a park cannot compensate for. That said, I'd resist treating them as alternatives. High-density housing without public space produces neighbourhoods people leave as soon as they can afford to, so the two investments reinforce each other. The sensible framing is proportion, not choice."],
["How can city design influence people's health?","Mainly by determining how much physical activity happens without anyone deciding to exercise. If daily errands can be done on foot, activity is built into ordinary life; if every trip requires a car, it has to be added deliberately, and most people won't. Design also affects air quality and mental health — access to green space is fairly consistently associated with lower stress, though I'd be cautious about how much of that is causal."],
["Do modern cities give too much space to private cars?","In most cases, yes, and I think the striking thing is how invisible that allocation is. Road space and parking are treated as neutral background rather than as a choice about who gets the land. When cities have reallocated even a modest share to buses, bicycles or pedestrians, the results have generally been positive — but the initial opposition is always strong because the loss is concentrated and visible while the gain is diffuse."],
["Will technology make cities more liveable in the future?","It could, but I don't think it's automatic. Technology is very good at optimising systems that already exist — better signal timing, real-time transport information, more efficient energy use. What it can't do is resolve questions about who a city is for, which are political rather than technical. There's also a risk of expensive smart infrastructure absorbing budgets that would produce more liveability if spent on ordinary things like pavements and bus frequency."]
]}
]},

{t:"note",title:"Báo cáo kết quả · Điểm và thời gian",tag:"Checklist",html:`
<p class="instr">Chỉ hoàn thành báo cáo <b>sau khi</b> kết thúc toàn bộ buổi thi thử.</p>
<div class="tablewrap"><table class="vt">
<tr><th>Section</th><th>Result</th><th>Time</th><th>Target</th><th>Gap</th></tr>
<tr><td class="ph">Reading Passage 1</td><td>… /13</td><td></td><td></td><td></td></tr>
<tr><td class="ph">Reading Passage 2</td><td>… /13</td><td></td><td></td><td></td></tr>
<tr><td class="ph">Reading Passage 3</td><td>… /14</td><td></td><td></td><td></td></tr>
<tr><td class="ph">Reading total</td><td>… /40</td><td>60 min</td><td></td><td></td></tr>
<tr><td class="ph">Writing Task 1</td><td>self-score</td><td></td><td></td><td></td></tr>
<tr><td class="ph">Writing Task 2</td><td>self-score</td><td></td><td></td><td></td></tr>
<tr><td class="ph">Speaking</td><td>self-score</td><td></td><td></td><td></td></tr>
</table></div>

<h4 style="margin-top:16px">Phân loại lỗi: kiến thức, kỹ năng hay áp lực?</h4>
<p class="instr">Cùng một câu sai có thể đến từ ba nguồn rất khác nhau, và cách sửa cũng khác nhau. Đối chiếu lỗi của bạn với hai danh sách sau.</p>
<div class="model"><span class="lb">Lỗi do áp lực</span>
<ul class="tips" style="margin-top:6px">
<li>read the correct evidence but selected too quickly</li>
<li>ignored a word limit</li>
<li>copied a spelling incorrectly</li>
<li>wrote an overview before seeing the whole chart</li>
<li>changed position during the essay</li>
<li>spoke faster and lost final sounds</li>
<li>abandoned a Part 3 answer after one idea</li>
</ul></div>
<div class="model" style="margin-top:10px"><span class="lb">Lỗi kỹ năng</span>
<ul class="tips" style="margin-top:6px">
<li>cannot distinguish False from Not Given</li>
<li>cannot identify the paragraph’s role</li>
<li>claim has no mechanism</li>
<li>cannot compare data accurately</li>
<li>lacks grammar needed for concession</li>
<li>lacks enough language to paraphrase a basic idea</li>
</ul></div>

<h4 style="margin-top:16px">Ba câu hỏi sau buổi thi thử</h4>
<ul class="tips">
<li>Kỹ năng nào <b>giữ được sự ổn định</b> dưới áp lực?</li>
<li>Kỹ năng nào trông vững khi luyện nhưng <b>biến mất</b> trong buổi mô phỏng?</li>
<li><b>Thao tác sửa nhỏ nhất</b> nào sẽ cải thiện lần thực hiện tiếp theo?</li>
</ul>`},

{t:"note",title:"Sản phẩm cần nộp — Ngày 20",tag:"Checklist",html:`
<ul class="tips checklist">
<li>Phiếu trả lời Reading (40 câu)</li>
<li>Bài báo cáo Task 1</li>
<li>Bài luận Task 2</li>
<li>Bản ghi âm Speaking liên tục</li>
<li>Báo cáo kết quả đã hoàn thành</li>
<li><b>Năm lỗi ưu tiên</b> cho Ngày 21</li>
</ul>
<div class="model" style="margin-top:12px"><span class="lb">Lưu ý</span>
Bài mock là <b>công cụ chẩn đoán</b>. Kết quả thấp vẫn hữu ích nếu người học xác định được lỗi và điều chỉnh cách luyện tập.</div>`}
]}
;
