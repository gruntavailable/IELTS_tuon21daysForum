/* English titles for the 21 days and for every lesson block.
   Keyed by the exact Vietnamese source string, so day data files stay untouched:
   a block whose title is not listed here simply keeps its original text.

   Only headings, focus lines and instructions are translated. Passages, questions,
   model answers and explanations stay as written — that material is the lesson. */

export const DAY_TITLES_EN = {
  "Ngày 01 — Xác định điểm xuất phát": "Day 01 — Finding your starting point",
  "Ngày 02 — Luận đề và mạch lập luận": "Day 02 — Thesis and line of argument",
  "Ngày 03 — Bằng chứng trong Reading": "Day 03 — Evidence in Reading",
  "Ngày 04 — Độ trôi chảy trong Speaking": "Day 04 — Fluency in Speaking",
  "Ngày 05 — Lỗi dịch và collocation": "Day 05 — Translation errors and collocation",
  "Ngày 06 — Đặc điểm chính trong Task 1": "Day 06 — Key features in Task 1",
  "Ngày 07 — Đánh giá cuối tuần 1": "Day 07 — End of Week 1 review",
  "Ngày 08 — Phát triển ý trong Task 2": "Day 08 — Developing ideas in Task 2",
  "Ngày 09 — Chức năng đoạn văn": "Day 09 — Paragraph function",
  "Ngày 10 — Ngân hàng câu chuyện": "Day 10 — The story bank",
  "Ngày 11 — Ngữ pháp trong lập luận": "Day 11 — Grammar in argument",
  "Ngày 12 — Độ chính xác trong Task 1": "Day 12 — Accuracy in Task 1",
  "Ngày 13 — Góc nhìn rộng trong Part 3": "Day 13 — Widening perspective in Part 3",
  "Ngày 14 — Đánh giá có bấm giờ": "Day 14 — Timed review",
  "Ngày 15 — Reading có bấm giờ": "Day 15 — Timed Reading",
  "Ngày 16 — Writing có bấm giờ": "Day 16 — Timed Writing",
  "Ngày 17 — Thi thử Speaking": "Day 17 — Speaking mock test",
  "Ngày 18 — Luyện tập theo lỗi ưu tiên": "Day 18 — Practice by priority error",
  "Ngày 19 — Một chủ đề, ba kỹ năng": "Day 19 — One topic, three skills",
  "Ngày 20 — Thi thử IELTS": "Day 20 — Full IELTS mock test",
  "Ngày 21 — Đánh giá cuối lộ trình": "Day 21 — End-of-course review"
};

export const DAY_FOCUS_EN = {
  1: "Sit the baseline test honestly and against the clock. The aim is evidence of where marks are lost, not a high score.",
  2: "A thesis must answer the exact question type, state your position clearly and signal what Body 1 and Body 2 will each do.",
  3: "Shift from CHOOSING an answer to PROVING it. Every question needs an evidence location, a paraphrase pair and a trap label.",
  4: "Fluency means holding a line of thought, pausing in the right places and self-correcting briefly — not speaking fast. Record → transcribe → fix ONE error → record again.",
  5: "Break the habit of building English sentences word by word from Vietnamese. The routine: main idea → choose the English phrase → drop the whole phrase into the sentence.",
  6: "An overview must state the 2–3 broadest features. Observe → select → group → compare → check.",
  7: "The first review measures change through concrete deliverables. Every claim of progress needs evidence behind it, not just the feeling that the material is familiar.",
  8: "A Task 2 idea is fully developed once the writer can explain the mechanism linking the claim to its consequence. An example is only worth including when it clarifies that mechanism.",
  9: "Matching Headings asks you to identify the function of a whole paragraph and the direction it develops in. Keywords tell you the topic; only the structure of the argument tells you the function.",
  10: "One true, detailed story can serve several cue cards by changing the angle you tell it from. You change the perspective, never the facts.",
  11: "Grammar exists to express the relationship between ideas. The decision about meaning comes before the decision about connectives and clause types.",
  12: "Three layers of control: select the right features, use the right figures, and express the right relationships. A sentence can be grammatically correct and still answer the wrong task.",
  13: "Move from personal experience to groups of people, social causes, policy and long-term consequences. Each perspective must add a new mechanism.",
  14: "Time pressure exposes the skills that are only stable when you practise slowly. Every error must be classified: knowledge, technique, timing or attention.",
  15: "Two skills at once: allocating time and holding your evidence standard. Note the finishing time of each question group so you can see which part is costing too many minutes.",
  16: "A timed piece of writing shows what you prioritise when time is short. The rewrite must keep the same prompt and main ideas so the comparison means something.",
  17: "Keep the repeated words, the hesitations and the grammar errors in your transcript — that is the data you correct from. The goal is being easy to understand, not imitating a native accent.",
  18: "Build the whole lesson around ONE priority error. An error only counts as controlled once the correction still holds in a different context.",
  19: "Test how well you can carry ideas and language between Reading, Writing and Speaking. Same topic: keep the content, but change the formality and sentence length to suit each skill.",
  20: "The mock test simulates one unbroken sitting: set up your time, space and materials before you start, keep to the limits and look nothing up.",
  21: "Bring together evidence from the baseline test, the checkpoints and the mock test to judge how much changed in 21 days, then plan the next 30."
};

/* Block titles, keyed by the Vietnamese original. Titles already in English
   (Practice Passage 01, Questions 1–5 · Multiple Choice, …) are absent on purpose. */
export const BLOCK_TITLES_EN = {
  /* recurring across many days */
  "Định hướng học tập": "Learning objectives",
  "Tiêu chí hoàn thành": "Completion criteria",
  "Tổng quan trong ngày": "Overview of the day",
  "Vận dụng vào Writing": "Carry it into Writing",
  "Vận dụng vào Speaking": "Carry it into Speaking",
  "Sửa bản chép lời": "Correct the transcript",
  "Ngân hàng ngôn ngữ Task 1": "Task 1 language bank",

  /* day 1 */
  "Quy tắc làm bài đầu vào": "Rules for the baseline test",
  "Bài ngữ pháp đầu vào · Sửa lỗi": "Baseline grammar task · Error correction",
  "Cách sửa tự nhiên trong tiếng Anh": "Rewriting naturally in English",
  "Cụm từ về sự tập trung": "Phrases about concentration",
  "Bài Writing đầu vào · Task 2 body paragraph": "Baseline Writing task · Task 2 body paragraph",
  "Bài Speaking đầu vào": "Baseline Speaking task",
  "Sản phẩm cần nộp — Ngày 1": "Deliverables — Day 1",

  /* day 2 */
  "Thesis và lập trường": "Thesis and position",
  "Câu hỏi 1–5 · Ghép tiêu đề (Matching Headings)": "Questions 1–5 · Matching Headings",
  "Bài luyện phân tích đề · 5 đề bài": "Prompt analysis practice · 5 prompts",
  "Bài luyện thesis · Viết 5 câu": "Thesis practice · Write 5 sentences",
  "Bài luyện đoạn thân bài": "Body paragraph practice",
  "Lập trường và nhượng bộ · Kết hợp câu": "Position and concession · Sentence combining",
  "Sửa lỗi trọng điểm": "Priority error correction",
  "Cụm từ về giáo dục": "Phrases about education",
  "Speaking về giáo dục": "Speaking about education",
  "Sản phẩm cần nộp — Ngày 2": "Deliverables — Day 2",

  /* day 3 */
  "Phân biệt ba loại nhận định & bốn nhãn bẫy": "Three statement types and four trap labels",
  "Nhận diện paraphrase": "Spotting paraphrase",
  "Phép quy chiếu và từ chỉ lượng": "Reference and quantifiers",
  "Sửa câu cho tự nhiên": "Rewrite for natural English",
  "Vận dụng vào Writing · Task 2 ngắn": "Carry it into Writing · Short Task 2",
  "Cụm từ về thư viện & không gian công cộng": "Phrases about libraries and public space",
  "Speaking về không gian công cộng": "Speaking about public space",
  "Làm lại năm câu + Sản phẩm — Ngày 3": "Redo five questions + Deliverables — Day 3",

  /* day 4 */
  "Ba mục tiêu luyện Speaking": "Three goals for Speaking practice",
  "Bài đọc 04": "Reading passage 04",
  "Câu hỏi 1–5 · Ghép tiêu đề": "Questions 1–5 · Matching Headings",
  "Câu hỏi 6–8 · Trắc nghiệm": "Questions 6–8 · Multiple Choice",
  "Bài luyện Part 1 theo A-R-E": "Part 1 practice using A-R-E",
  "Khung câu chuyện · Chuẩn bị 3 câu chuyện dùng lại": "Story frames · Prepare 3 reusable stories",
  "Bài luyện Part 2 & Part 3 về giao tiếp": "Part 2 & Part 3 practice on communication",
  "Bài luyện ngắt cụm (thought groups)": "Thought group practice",
  "Trọng âm từ": "Word stress",
  "Bài luyện âm cuối": "Final sound practice",
  "Bài vận dụng vào Writing": "Carry it into Writing",
  "Ngân hàng cụm từ Speaking": "Speaking phrase bank",
  "Sửa bản chép lời + Sản phẩm — Ngày 4": "Correct the transcript + Deliverables — Day 4",

  /* day 5 */
  "Quy trình bốn bước sửa lỗi dịch": "Four steps for fixing translation errors",
  "Bài đọc 05": "Reading passage 05",
  "Câu hỏi 1–8 · Tóm tắt (Summary Completion)": "Questions 1–8 · Summary Completion",
  "Sửa lỗi dịch từ tiếng Việt · 18 câu": "Fix translation errors from Vietnamese · 18 sentences",
  "Sửa lỗi collocation · 10 câu": "Fix collocation errors · 10 sentences",
  "Bài luyện dạng từ và giới từ": "Word form and preposition practice",
  "Phân loại theo văn phong": "Sort by register",
  "Ngân hàng cụm từ về học ngôn ngữ": "Phrase bank on language learning",
  "Sản phẩm — Ngày 5": "Deliverables — Day 5",

  /* day 6 */
  "Năm bước xử lí Task 1 & chức năng của overview": "Five steps for Task 1 and the job of the overview",
  "Bài đọc 06": "Reading passage 06",
  "Câu hỏi 1–4 · Trắc nghiệm": "Questions 1–4 · Multiple Choice",
  "Câu hỏi 5–8 · Phân loại nhận định (T/F/NG)": "Questions 5–8 · True / False / Not Given",
  "Bài luyện quan sát biểu đồ · 4 hình": "Chart observation practice · 4 figures",
  "Bài luyện viết overview · 6 câu": "Overview writing practice · 6 sentences",
  "So sánh và số liệu · Sửa 10 câu": "Comparison and figures · Fix 10 sentences",
  "Bài Task 1": "Task 1 response",
  "Ngân hàng cụm từ về số liệu": "Phrase bank for describing data",
  "Sản phẩm — Ngày 6": "Deliverables — Day 6",

  /* day 7 */
  "Bài đọc 07": "Reading passage 07",
  "Câu hỏi 1–5 · Phân loại nhận định (T/F/NG)": "Questions 1–5 · True / False / Not Given",
  "Câu hỏi 6–9 · Trắc nghiệm": "Questions 6–9 · Multiple Choice",
  "Câu hỏi 10–12 · Hoàn thành câu": "Questions 10–12 · Sentence Completion",
  "Phiếu ghi thời gian Reading": "Reading timing sheet",
  "Bài đánh giá Writing": "Writing review task",
  "Bài đánh giá Speaking": "Speaking review task",
  "Kiểm tra ngôn ngữ Tuần 1 · Sửa 10 câu": "Week 1 language check · Fix 10 sentences",
  "Kiểm tra khả năng nhớ cụm từ": "Phrase recall check",
  "Bảng tổng kết Tuần 1": "Week 1 summary table",
  "Sản phẩm cần nộp — Ngày 7": "Deliverables — Day 7",

  /* day 8 */
  "Chuỗi phát triển ý": "Idea development chains",
  "Bài đọc 08": "Reading passage 08",
  "Câu hỏi 6–10 · Hoàn thành câu": "Questions 6–10 · Sentence Completion",
  "Ba chuỗi phát triển ý": "Three idea development chains",
  "Bài luyện Writing": "Writing practice",
  "Bài luyện Speaking về mạng xã hội": "Speaking practice on social media",
  "Ngân hàng cụm từ về truyền thông": "Phrase bank on media",
  "Nguyên nhân, hệ quả và hedging": "Cause, consequence and hedging",
  "Quan hệ nguyên nhân – hệ quả": "Cause and effect relationships",
  "Bài kiểm tra từ vựng": "Vocabulary check",
  "Sản phẩm cần nộp — Ngày 8": "Deliverables — Day 8",

  /* day 9 */
  "Sơ đồ chức năng đoạn": "Paragraph function map",
  "Bài đọc 09": "Reading passage 09",
  "Câu hỏi 1–8 · Ghép tiêu đề": "Questions 1–8 · Matching Headings",
  "Câu hỏi 9–14 · Ghép thông tin": "Questions 9–14 · Matching Information",
  "Phiếu phân tích chức năng đoạn": "Paragraph function analysis sheet",
  "Bài luyện loại phương án": "Elimination practice",
  "Cách diễn đạt chức năng": "Wording that signals function",
  "Bài luyện Speaking về không gian công cộng": "Speaking practice on public space",
  "Ngân hàng cụm từ về đô thị": "Phrase bank on urban life",
  "Từ quy chiếu và mệnh đề quan hệ": "Reference words and relative clauses",
  "Sửa từ quy chiếu": "Fix the reference words",
  "Sản phẩm cần nộp — Ngày 9": "Deliverables — Day 9",

  /* day 10 */
  "Câu chuyện và trí nhớ": "Stories and memory",
  "Bài đọc 10": "Reading passage 10",
  "Câu hỏi 1–4 · Ghép tiêu đề": "Questions 1–4 · Matching Headings",
  "Câu hỏi 5–8 · Trả lời ngắn": "Questions 5–8 · Short Answer",
  "Ba câu chuyện chính": "Three core stories",
  "Sơ đồ chuyển đổi cue card": "Cue card conversion map",
  "Bài luyện lập dàn ý một phút": "One-minute planning practice",
  "Bài ghi âm Part 2": "Part 2 recording task",
  "Vận dụng câu chuyện vào Writing": "Carry the story into Writing",
  "Ngân hàng cụm từ kể chuyện": "Storytelling phrase bank",
  "Ngữ pháp kể chuyện quá khứ": "Past narrative grammar",
  "Mở rộng câu": "Extending your answers",
  "Sản phẩm cần nộp — Ngày 10": "Deliverables — Day 10",

  /* day 11 */
  "Ngữ pháp và quan hệ giữa các ý": "Grammar and the relationship between ideas",
  "Bài đọc 11": "Reading passage 11",
  "Câu hỏi 1–5 · Hoàn thành câu": "Questions 1–5 · Sentence Completion",
  "Kiểm tra ranh giới câu": "Sentence boundary check",
  "Bài luyện ngữ pháp · A. Nguyên nhân và hệ quả": "Grammar practice · A. Cause and consequence",
  "Bài luyện ngữ pháp · B. Đối lập và nhượng bộ": "Grammar practice · B. Contrast and concession",
  "Bài luyện ngữ pháp · C. Điều kiện": "Grammar practice · C. Conditionals",
  "Bài luyện ngữ pháp · D. Hedging": "Grammar practice · D. Hedging",
  "Sửa lỗi dấu câu": "Fix the punctuation",
  "Đoạn văn ngắn": "Short paragraph",
  "Vận dụng ngữ pháp vào Speaking": "Carry the grammar into Speaking",
  "Ngân hàng cụm từ lập luận": "Phrase bank for argument",
  "Sửa cách diễn đạt tiếng Anh": "Rewrite for natural English",
  "Sản phẩm cần nộp — Ngày 11": "Deliverables — Day 11",

  /* day 12 */
  "Kiểm tra độ chính xác trong Task 1": "Accuracy checks for Task 1",
  "Bài đọc 12": "Reading passage 12",
  "Câu hỏi 1–4 · Phân loại quan điểm (Y/N/NG)": "Questions 1–4 · Yes / No / Not Given",
  "Tự kiểm tra và viết lại": "Self-check and rewrite",
  "Bị động, so sánh và vị trí · Sửa 10 câu": "Passives, comparison and location · Fix 10 sentences",
  "Ngân hàng cụm từ về công việc": "Phrase bank on work",
  "Sản phẩm cần nộp — Ngày 12": "Deliverables — Day 12",

  /* day 13 */
  "Sơ đồ góc nhìn trong Part 3": "Perspective map for Part 3",
  "Bài đọc 13": "Reading passage 13",
  "Câu hỏi 1–5 · Phân loại quan điểm (Y/N/NG)": "Questions 1–5 · Yes / No / Not Given",
  "Câu hỏi 6–10 · Trắc nghiệm": "Questions 6–10 · Multiple Choice",
  "Hai sơ đồ góc nhìn": "Two perspective maps",
  "Bộ câu hỏi Part 3": "Part 3 question set",
  "Bài luyện sắc thái": "Nuance practice",
  "Nhịp nói và tự sửa": "Pacing and self-correction",
  "Hedging và khái quát hoá": "Hedging and generalisation",
  "Sản phẩm cần nộp — Ngày 13": "Deliverables — Day 13",

  /* day 14 */
  "Nhóm nguyên nhân gây áp lực": "Sources of pressure",
  "Bài đọc 14": "Reading passage 14",
  "Bài Writing có bấm giờ": "Timed Writing task",
  "Bài thi thử Speaking": "Speaking mock test",
  "Phiếu theo dõi áp lực": "Pressure tracking sheet",
  "Bài kiểm tra ngữ pháp tổng hợp": "Combined grammar check",
  "Ngân hàng cụm từ về áp lực": "Phrase bank on pressure",
  "Bảng tổng kết áp lực Tuần 2": "Week 2 pressure summary",
  "Sản phẩm cần nộp — Ngày 14": "Deliverables — Day 14",

  /* day 15 */
  "Chiến lược phân bổ thời gian": "Time allocation strategy",
  "Bài đọc 1": "Reading passage 1",
  "Bài đọc 2": "Reading passage 2",
  "Bài đọc 3": "Reading passage 3",
  "Phân tích lỗi": "Error analysis",
  "Ngân hàng paraphrase": "Paraphrase bank",
  "Vận dụng từ Reading sang Writing": "Carry it from Reading into Writing",
  "Cụm từ về trí nhớ và văn hoá": "Phrases about memory and culture",
  "Làm lại năm câu": "Redo five questions",
  "Sản phẩm cần nộp — Ngày 15": "Deliverables — Day 15",

  /* day 16 */
  "Dàn ý trong tám phút": "An outline in eight minutes",
  "Bài Task 2 có bấm giờ": "Timed Task 2 response",
  "Tự chấm bài · Bốn tiêu chí": "Self-assessment · Four criteria",
  "Viết lại đoạn yếu nhất": "Rewrite your weakest paragraph",
  "Lỗi thường gặp khi viết có bấm giờ": "Common errors under time pressure",
  "Speaking về đại học và việc làm": "Speaking about university and work",
  "Cụm từ về đại học và việc làm": "Phrases about university and work",
  "Checklist rà soát trong năm phút cuối": "Five-minute final review checklist",
  "Sản phẩm cần nộp — Ngày 16": "Deliverables — Day 16",

  /* day 17 */
  "Chuẩn bị trước bài thi thử": "Before the mock test",
  "Bài đọc 17": "Reading passage 17",
  "Bài thi thử Speaking · Bộ A": "Speaking mock test · Set A",
  "Bài thi thử mở rộng · Bộ B": "Extended mock test · Set B",
  "Dữ liệu từ lượt nghe đầu": "Data from the first listen",
  "Sửa bản chép lời hai phút": "Two-minute transcript correction",
  "Lần thực hiện thứ hai": "The second attempt",
  "Bộ bài sửa phát âm": "Pronunciation correction set",
  "Cụm từ về học tập và tự sửa": "Phrases about studying and self-correction",
  "Bài Writing ngắn": "Short Writing task",
  "Sản phẩm cần nộp — Ngày 17": "Deliverables — Day 17",

  /* day 18 */
  "Tổng quan trong ngày · Chọn bộ bài": "Overview of the day · Choose your set",
  "Mục tiêu có thể đo lường": "A measurable goal",
  "Bộ A · Practice Passage": "Set A · Practice Passage",
  "Bộ A2 · Kiểm tra lại bằng chứng": "Set A2 · Recheck the evidence",
  "Bộ A3 · Câu hỏi vận dụng": "Set A3 · Transfer questions",
  "Bộ B1 · Sửa câu luận đề": "Set B1 · Fix the thesis statement",
  "Bộ B2–B3 · Đoạn văn trước và sau khi sửa": "Sets B2–B3 · Paragraph before and after correction",
  "Bộ B4 · Kiểm soát cấu trúc câu": "Set B4 · Sentence structure control",
  "Bộ B5 · Đoạn văn vận dụng": "Set B5 · Transfer paragraph",
  "Bộ C · Sửa lỗi Speaking": "Set C · Speaking error correction",
  "Bộ C4 · Bài luyện phát âm": "Set C4 · Pronunciation practice",
  "Cụm từ về môi trường": "Phrases about the environment",
  "Bài kiểm tra lần hai": "Second check",
  "Sản phẩm cần nộp — Ngày 18": "Deliverables — Day 18",

  /* day 19 */
  "Nguyên tắc chuyển giao": "Principles of transfer",
  "Bài đọc 19": "Reading passage 19",
  "Bảng rà soát Reading": "Reading review table",
  "Sơ đồ ý trước khi viết": "Idea map before writing",
  "Bài luyện câu luận đề · Ba phiên bản": "Thesis practice · Three versions",
  "Bài Writing Task 2": "Writing Task 2 response",
  "Khung phát triển đoạn thân bài": "Body paragraph development frame",
  "Đoạn vận dụng trong 12 phút": "Transfer paragraph in 12 minutes",
  "Bài luyện Speaking": "Speaking practice",
  "Cụm từ cho ba kỹ năng · 24 phrase transfer bank": "Phrases for all three skills · 24-phrase transfer bank",
  "Tự nhớ lại": "Recall from memory",
  "Ngữ pháp · A. Giới hạn nhận định về tương lai": "Grammar · A. Limiting claims about the future",
  "Ngữ pháp · B. Nhượng bộ và duy trì lập trường": "Grammar · B. Conceding while holding your position",
  "Ngữ pháp · C. Văn phong nói và học thuật": "Grammar · C. Spoken and academic register",
  "Kiểm tra chuyển giao cuối ngày": "End-of-day transfer check",
  "Sản phẩm cần nộp — Ngày 19": "Deliverables — Day 19",

  /* day 20 */
  "Quy tắc của buổi thi thử": "Rules for the mock test",
  "Báo cáo kết quả · Điểm và thời gian": "Results report · Score and timing",
  "Sản phẩm cần nộp — Ngày 20": "Deliverables — Day 20",

  /* day 21 */
  "Bài đọc 21": "Reading passage 21",
  "Đánh giá cuối lộ trình · Ba bảng đối chiếu": "End-of-course review · Three comparison tables",
  "Nhiệm vụ A · Viết lại đề Ngày 1": "Task A · Rewrite the Day 1 prompt",
  "Nhiệm vụ B · Đoạn vận dụng mới": "Task B · New transfer paragraph",
  "Tự chấm bài Writing cuối lộ trình": "Self-assess your final Writing",
  "Bản ghi âm Speaking cuối lộ trình": "Final Speaking recording",
  "Rà soát từ vựng · A. Hoàn thành collocation": "Vocabulary review · A. Complete the collocation",
  "Rà soát từ vựng · B. Sửa cách diễn đạt": "Vocabulary review · B. Fix the wording",
  "Rà soát từ vựng · C. Chọn từ chính xác": "Vocabulary review · C. Choose the precise word",
  "Rà soát ngữ pháp toàn lộ trình · Sửa 25 câu": "Whole-course grammar review · Fix 25 sentences",
  "Hồ sơ học tập · Checklist tệp bắt buộc": "Learning portfolio · Required files checklist",
  "Kế hoạch 30 ngày tiếp theo": "Your next 30-day plan",
  "Thư tổng kết": "Closing letter",
  "Sản phẩm cần nộp — Ngày 21": "Deliverables — Day 21"
};

/* Tags on lesson blocks. Anything not listed keeps its original text. */
export const BLOCK_TAGS_EN = {
  "Hướng dẫn": "Guide",
  "Lý thuyết": "Theory",
  "Nhịp học": "Pacing",
  "Dịch": "Translation",
  "Kế hoạch": "Plan",
  "Ghi chú": "Note",
  "Tự luận": "Open response"
};

export function dayTitleEN(title){ return DAY_TITLES_EN[title] || title; }
export function blockTitleEN(title){ return BLOCK_TITLES_EN[title] || title; }
export function blockTagEN(tag){ return BLOCK_TAGS_EN[tag] || tag; }
