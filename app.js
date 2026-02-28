// ============================
// 수강 데이터 (이미지에서 추출)
// ============================
const courses = [
	{
		id: 1,
		name: "(외국인)한국 비자 정책의 이해",
		code: "U0099344",
		type: "교양선택",
		credits: 2,
		grading: "4.5",
		method: "비대면",
		department: "공통교양",
		teacher: "박길남",
		room: "비대면",
		year: 1,
		times: [
			{ day: "금", start: "11:00", end: "11:50" },
			{ day: "금", start: "12:00", end: "12:50" },
		],
	},
	{
		id: 2,
		name: "SAU성공학",
		code: "U0090002",
		type: "전공필수",
		credits: 1,
		grading: "P/NP",
		method: "대면",
		department: "뷰티디자인과",
		teacher: "강사미정",
		room: "뷰티디자인 세미나실",
		year: 1,
		times: [{ day: "월", start: "16:00", end: "16:50" }],
	},
	{
		id: 3,
		name: "기독교의 이해",
		code: "U0099343",
		type: "교양선택",
		credits: 2,
		grading: "4.5",
		method: "비대면",
		department: "호텔제과제빵과",
		teacher: "홍성구",
		room: "비대면",
		year: 1,
		times: [
			{ day: "화", start: "11:00", end: "11:50" },
			{ day: "화", start: "12:00", end: "12:50" },
		],
	},
	{
		id: 4,
		name: "기초피부관리",
		code: "U0099322",
		type: "전공선택",
		credits: 3,
		grading: "4.5",
		method: "대면",
		department: "뷰티디자인과",
		teacher: "김미옥",
		room: "과학관 피부미용관리실습실",
		year: 1,
		times: [
			{ day: "목", start: "09:00", end: "09:50" },
			{ day: "목", start: "10:00", end: "10:50" },
			{ day: "목", start: "11:00", end: "11:50" },
		],
	},
	{
		id: 5,
		name: "기초헤어커트",
		code: "U0099086",
		type: "전공선택",
		credits: 3,
		grading: "4.5",
		method: "대면",
		department: "뷰티디자인과",
		teacher: "허지윤",
		room: "미용종합실습실2",
		year: 1,
		times: [
			{ day: "월", start: "13:00", end: "13:50" },
			{ day: "월", start: "14:00", end: "14:50" },
			{ day: "월", start: "15:00", end: "15:50" },
		],
	},
	{
		id: 6,
		name: "나만의아로마화장품만들기",
		code: "U0020619",
		type: "전공선택",
		credits: 2,
		grading: "4.5",
		method: "대면",
		department: "뷰티디자인과",
		teacher: "박은정",
		room: "네일케어아트 실습실",
		year: 1,
		times: [
			{ day: "월", start: "09:00", end: "09:50" },
			{ day: "월", start: "10:00", end: "10:50" },
		],
	},
	{
		id: 7,
		name: "모발과학",
		code: "U0020366",
		type: "전공선택",
		credits: 2,
		grading: "4.5",
		method: "대면",
		department: "뷰티디자인과",
		teacher: "고혜림",
		room: "뷰티디자인 세미나실",
		year: 1,
		times: [
			{ day: "월", start: "11:00", end: "11:50" },
			{ day: "월", start: "12:00", end: "12:50" },
		],
	},
	{
		id: 8,
		name: "베이직메이크업",
		code: "U0020547",
		type: "전공선택",
		credits: 3,
		grading: "4.5",
		method: "대면",
		department: "뷰티디자인과",
		teacher: "강사미정",
		room: "과학관 메이크업실",
		year: 1,
		times: [
			{ day: "목", start: "15:00", end: "15:50" },
			{ day: "목", start: "16:00", end: "16:50" },
			{ day: "목", start: "17:00", end: "17:50" },
		],
	},
	{
		id: 9,
		name: "뷰티 색채",
		code: "U0099664",
		type: "전공선택",
		credits: 2,
		grading: "4.5",
		method: "대면",
		department: "뷰티디자인과",
		teacher: "백진아",
		room: "기초디자인 실습실(2)",
		year: 1,
		times: [
			{ day: "목", start: "13:00", end: "13:50" },
			{ day: "목", start: "14:00", end: "14:50" },
		],
	},
];

// ============================
// 상수
// ============================
const DAYS = ["월", "화", "수", "목", "금"];
const DAY_NAMES = {
	월: "월요일",
	화: "화요일",
	수: "수요일",
	목: "목요일",
	금: "금요일",
};

// 과목 타입별 이모지
const TYPE_EMOJI = {
	교양선택: "🌏",
	전공필수: "⭐",
	전공선택: "📐",
};

// ============================
// 유틸리티 함수
// ============================

/** 시간 문자열을 분 단위 숫자로 변환 */
function timeToMinutes(timeStr) {
	const [h, m] = timeStr.split(":").map(Number);
	return h * 60 + m;
}

/** 과목에 할당된 CSS 색상 변수 이름을 반환 */
function getCourseColorVar(courseId) {
	return `--course-${courseId}`;
}

/** 오늘의 요일을 한글로 반환 */
function getTodayDay() {
	const dayMap = ["일", "월", "화", "수", "목", "금", "토"];
	return dayMap[new Date().getDay()];
}

/** 현재 시간을 HH:MM 형식으로 반환 */
function getCurrentTime() {
	const now = new Date();
	return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
}

/** 총 학점 계산 */
function getTotalCredits() {
	return courses.reduce((sum, c) => sum + c.credits, 0);
}

// ============================
// 시간표의 시간 범위 계산
// ============================
function getTimeRange() {
	let minHour = 24,
		maxHour = 0;
	for (const course of courses) {
		for (const t of course.times) {
			const startH = parseInt(t.start.split(":")[0]);
			const endH = parseInt(t.end.split(":")[0]);
			if (startH < minHour) minHour = startH;
			if (endH >= maxHour) maxHour = endH + 1;
		}
	}
	return { startHour: minHour, endHour: maxHour };
}

// ============================
// 시간표 그리드 렌더링
// ============================
function renderTimetable() {
	const tbody = document.getElementById("timetableBody");
	const { startHour, endHour } = getTimeRange();
	const todayDay = getTodayDay();

	// 테이블 행 생성 (각 시간대)
	let html = "";
	for (let h = startHour; h < endHour; h++) {
		html += `<tr>`;
		html += `<td>${String(h).padStart(2, "0")}</td>`;
		for (const day of DAYS) {
			const isTodayCol = day === todayDay;
			html += `<td class="${isTodayCol ? "today-col-cell" : ""}" data-day="${day}" data-hour="${h}"></td>`;
		}
		html += `</tr>`;
	}
	tbody.innerHTML = html;

	// 오늘 요일 헤더 강조
	document.querySelectorAll(".timetable thead th[data-day]").forEach((th) => {
		if (th.dataset.day === todayDay) {
			th.classList.add("today-col");
		}
	});

	// 과목 블록 배치
	for (const course of courses) {
		for (const t of course.times) {
			const startMin = timeToMinutes(t.start);
			const endMin = timeToMinutes(t.end);
			const startH = Math.floor(startMin / 60);
			const heightSpan = (endMin - startMin) / 60;

			const td = tbody.querySelector(
				`td[data-day="${t.day}"][data-hour="${startH}"]`,
			);
			if (!td) continue;

			const block = document.createElement("div");
			block.className = "course-block";
			block.style.cssText = `
        top: ${((startMin % 60) / 60) * 100}%;
        height: calc(${heightSpan} * var(--cell-height) - 4px);
        background: var(${getCourseColorVar(course.id)}-bg);
        border-left-color: var(${getCourseColorVar(course.id)});
        color: var(${getCourseColorVar(course.id)});
      `;
			block.innerHTML = `
        <span class="course-name">${course.name}</span>
        ${heightSpan >= 0.8 ? `<span class="course-room">${course.room}</span>` : ""}
      `;
			block.addEventListener("click", () => openModal(course));
			td.appendChild(block);
		}
	}

	// 연속 시간 블록 병합 (같은 과목이 연속된 시간대에 있을 때)
	mergeContinuousBlocks();
}

/** 같은 요일에 연속된 시간대의 과목 블록을 하나로 합침 */
function mergeContinuousBlocks() {
	const tbody = document.getElementById("timetableBody");

	for (const course of courses) {
		// 요일별로 시간 정렬
		const dayTimes = {};
		for (const t of course.times) {
			if (!dayTimes[t.day]) dayTimes[t.day] = [];
			dayTimes[t.day].push(t);
		}

		for (const day of DAYS) {
			if (!dayTimes[day] || dayTimes[day].length < 2) continue;

			const times = dayTimes[day].sort(
				(a, b) => timeToMinutes(a.start) - timeToMinutes(b.start),
			);

			// 연속 시간 체크
			const groups = [[times[0]]];
			for (let i = 1; i < times.length; i++) {
				const prevEnd = timeToMinutes(times[i - 1].end);
				const currStart = timeToMinutes(times[i].start);
				if (currStart - prevEnd <= 10) {
					groups[groups.length - 1].push(times[i]);
				} else {
					groups.push([times[i]]);
				}
			}

			// 연속 그룹 병합
			for (const group of groups) {
				if (group.length < 2) continue;

				const firstStart = timeToMinutes(group[0].start);
				const lastEnd = timeToMinutes(group[group.length - 1].end);
				const firstH = Math.floor(firstStart / 60);
				const totalHeight = (lastEnd - firstStart) / 60;

				// 기존 블록 삭제
				for (const t of group) {
					const h = Math.floor(timeToMinutes(t.start) / 60);
					const td = tbody.querySelector(
						`td[data-day="${day}"][data-hour="${h}"]`,
					);
					if (td) {
						const blocks = td.querySelectorAll(".course-block");
						blocks.forEach((b) => {
							if (
								b.querySelector(".course-name")?.textContent === course.name
							) {
								b.remove();
							}
						});
					}
				}

				// 병합된 블록 생성
				const td = tbody.querySelector(
					`td[data-day="${day}"][data-hour="${firstH}"]`,
				);
				if (!td) continue;

				const block = document.createElement("div");
				block.className = "course-block";
				block.style.cssText = `
          top: ${((firstStart % 60) / 60) * 100}%;
          height: calc(${totalHeight} * var(--cell-height) - 4px);
          background: var(${getCourseColorVar(course.id)}-bg);
          border-left-color: var(${getCourseColorVar(course.id)});
          color: var(${getCourseColorVar(course.id)});
        `;
				block.innerHTML = `
          <span class="course-name">${course.name}</span>
          <span class="course-room">${course.room}</span>
		  <span class="course-room">${group[0].start}-${group[group.length - 1].end}</span>
        `;
				block.addEventListener("click", () => openModal(course));
				td.appendChild(block);
			}
		}
	}
}

// ============================
// 상태 관리
// ============================
let currentViewDay = getTodayDay();
if (currentViewDay === "토" || currentViewDay === "일") currentViewDay = "월";
let isTodayCollapsed = localStorage.getItem("isTodayCollapsed") === "true";

// ============================
// 오늘의 수업 렌더링
// ============================
function renderTodayBanner() {
	const container = document.getElementById("todayClasses");
	const todayText = document.getElementById("todayText");
	const dot = document.querySelector(".today-dot");

	const actualToday = getTodayDay();
	const isSelectedToday = currentViewDay === actualToday;

	todayText.textContent = `${DAY_NAMES[currentViewDay]}의 수업`;

	// 오늘인 경우에만 실시간 표시등 활성화
	if (isSelectedToday) {
		dot.style.display = "block";
	} else {
		dot.style.display = "none";
	}

	// 선택된 요일 수업 필터링
	const dayCourses = [];
	for (const course of courses) {
		for (const t of course.times) {
			if (t.day === currentViewDay) {
				dayCourses.push({ course, time: t });
			}
		}
	}

	// 시간순 정렬
	dayCourses.sort(
		(a, b) => timeToMinutes(a.time.start) - timeToMinutes(b.time.start),
	);

	// 그룹화
	const grouped = [];
	for (const item of dayCourses) {
		const last = grouped[grouped.length - 1];
		if (last && last.course.id === item.course.id) {
			last.endTime = item.time.end;
		} else {
			grouped.push({
				course: item.course,
				startTime: item.time.start,
				endTime: item.time.end,
			});
		}
	}

	if (grouped.length === 0) {
		container.innerHTML = `
      <div class="today-empty">
        <div class="today-empty-icon">☕</div>
        ${currentViewDay === actualToday ? "오늘은" : DAY_NAMES[currentViewDay] + "에는"} 수업이 없어요!
      </div>
    `;
		return;
	}

	const currentTime = getCurrentTime();
	container.innerHTML = grouped
		.map((item, i) => {
			const colorVar = getCourseColorVar(item.course.id);
			const isNow =
				isSelectedToday &&
				currentTime >= item.startTime &&
				currentTime <= item.endTime;
			const isPast = isSelectedToday && currentTime > item.endTime;

			return `
      <div class="today-class-item animate-in"
           style="background: var(${colorVar}-bg); animation-delay: ${i * 0.05}s; ${isPast ? "opacity: 0.5;" : ""}"
           data-course-id="${item.course.id}">
        <span class="today-class-dot" style="background: var(${colorVar}); ${isNow ? "animation: pulse-dot 2s ease-in-out infinite;" : ""}"></span>
        <div class="today-class-info">
          <div class="today-class-time">${item.startTime} - ${item.endTime}</div>
          <div class="today-class-name" style="color: var(${colorVar})">${item.course.name}</div>
          <div class="today-class-meta">
            <span>👤 ${item.course.teacher}</span>
            <span>📍 ${item.course.room}</span>
          </div>
        </div>
      </div>
    `;
		})
		.join("");

	// 클릭 이벤트
	container.querySelectorAll(".today-class-item").forEach((el) => {
		el.addEventListener("click", () => {
			const course = courses.find(
				(c) => c.id === parseInt(el.dataset.courseId),
			);
			if (course) openModal(course);
		});
	});
}

/** 날짜 이동 함수 */
function moveDay(direction) {
	const currentIndex = DAYS.indexOf(currentViewDay);
	let nextIndex = currentIndex + direction;

	if (nextIndex < 0) nextIndex = DAYS.length - 1;
	if (nextIndex >= DAYS.length) nextIndex = 0;

	currentViewDay = DAYS[nextIndex];
	renderTodayBanner();
}

/** 오늘의 수업 접기/펴기 */
function toggleTodayFold(isInitial = false) {
	const banner = document.getElementById("todayBanner");
	const classes = document.getElementById("todayClasses");
	const btn = document.getElementById("todayFold");

	if (!isInitial) {
		isTodayCollapsed = !isTodayCollapsed;
		localStorage.setItem("isTodayCollapsed", isTodayCollapsed);
	}

	if (isTodayCollapsed) {
		banner.classList.add("collapsed");
		classes.classList.add("collapsed");
		btn.classList.add("active");
	} else {
		banner.classList.remove("collapsed");
		classes.classList.remove("collapsed");
		btn.classList.remove("active");
	}
}

// ============================
// 리스트 뷰 렌더링
// ============================
function renderListView() {
	const container = document.getElementById("listContent");

	let html = "";
	for (const day of DAYS) {
		const dayCourses = [];
		for (const course of courses) {
			const dayTimes = course.times.filter((t) => t.day === day);
			if (dayTimes.length > 0) {
				// 같은 과목 시간 합치기
				const sorted = dayTimes.sort(
					(a, b) => timeToMinutes(a.start) - timeToMinutes(b.start),
				);
				dayCourses.push({
					course,
					startTime: sorted[0].start,
					endTime: sorted[sorted.length - 1].end,
				});
			}
		}

		if (dayCourses.length === 0) continue;
		dayCourses.sort(
			(a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime),
		);

		html += `<div class="list-day-group">`;
		html += `<div class="list-day-header">${DAY_NAMES[day]}</div>`;

		for (const item of dayCourses) {
			const colorVar = getCourseColorVar(item.course.id);
			html += `
        <div class="list-card" data-course-id="${item.course.id}">
          <div class="list-card-indicator" style="background: var(${colorVar})"></div>
          <div class="list-card-content">
            <div class="list-card-name" style="color: var(${colorVar})">${item.course.name}</div>
            <div class="list-card-meta">
              <span class="list-card-meta-item">🕐 ${item.startTime} - ${item.endTime}</span>
              <span class="list-card-meta-item">👤 ${item.course.teacher}</span>
              <span class="list-card-meta-item">📍 ${item.course.room}</span>
              <span class="list-card-meta-item">📚 ${item.course.credits}학점</span>
              <span class="list-card-meta-item">${item.course.type}</span>
            </div>
          </div>
        </div>
      `;
		}
		html += `</div>`;
	}

	container.innerHTML = html;

	// 클릭 이벤트
	container.querySelectorAll(".list-card").forEach((el) => {
		el.addEventListener("click", () => {
			const course = courses.find(
				(c) => c.id === parseInt(el.dataset.courseId),
			);
			if (course) openModal(course);
		});
	});
}

// ============================
// 과목 상세 모달
// ============================
function openModal(course) {
	const overlay = document.getElementById("modalOverlay");
	const body = document.getElementById("modalBody");
	const colorVar = getCourseColorVar(course.id);
	const emoji = TYPE_EMOJI[course.type] || "📖";

	// 시간 정보 (요일별 그룹)
	const dayTimes = {};
	for (const t of course.times) {
		if (!dayTimes[t.day]) dayTimes[t.day] = [];
		dayTimes[t.day].push(t);
	}

	const timeText = Object.entries(dayTimes)
		.map(([day, times]) => {
			times.sort((a, b) => timeToMinutes(a.start) - timeToMinutes(b.start));
			const first = times[0].start;
			const last = times[times.length - 1].end;
			return `${DAY_NAMES[day]} ${first} - ${last}`;
		})
		.join("<br>");

	body.innerHTML = `
    <div class="modal-course-name" style="color: var(${colorVar})">
      <span class="modal-course-emoji">${emoji}</span> ${course.name}
    </div>
    <span class="modal-course-type" style="background: var(${colorVar}-bg); color: var(${colorVar})">${course.type}</span>
    <ul class="modal-info-list">
      <li class="modal-info-item">
        <span class="modal-info-icon">🕐</span>
        <div>
          <div class="modal-info-label">강의시간</div>
          <div class="modal-info-value">${timeText}</div>
        </div>
      </li>
      <li class="modal-info-item">
        <span class="modal-info-icon">👤</span>
        <div>
          <div class="modal-info-label">담당교수</div>
          <div class="modal-info-value">${course.teacher} 교수님</div>
        </div>
      </li>
      <li class="modal-info-item">
        <span class="modal-info-icon">📍</span>
        <div>
          <div class="modal-info-label">강의실</div>
          <div class="modal-info-value">${course.room}</div>
        </div>
      </li>
      <li class="modal-info-item">
        <span class="modal-info-icon">📚</span>
        <div>
          <div class="modal-info-label">학점</div>
          <div class="modal-info-value">${course.credits}학점</div>
        </div>
      </li>
      <li class="modal-info-item">
        <span class="modal-info-icon">📝</span>
        <div>
          <div class="modal-info-label">성적평가</div>
          <div class="modal-info-value">${course.grading}</div>
        </div>
      </li>
      <li class="modal-info-item">
        <span class="modal-info-icon">🏫</span>
        <div>
          <div class="modal-info-label">개설학과</div>
          <div class="modal-info-value">${course.department}</div>
        </div>
      </li>
      <li class="modal-info-item">
        <span class="modal-info-icon">🔢</span>
        <div>
          <div class="modal-info-label">교과목코드</div>
          <div class="modal-info-value">${course.code}</div>
        </div>
      </li>
      <li class="modal-info-item">
        <span class="modal-info-icon">🎓</span>
        <div>
          <div class="modal-info-label">수업방법</div>
          <div class="modal-info-value">${course.method}</div>
        </div>
      </li>
    </ul>
  `;

	overlay.classList.add("active");
	document.body.style.overflow = "hidden";

	// 모달 위치 초기화
	const modal = document.getElementById("modal");
	modal.style.transform = "";
}

/** 모달 드래그 기능 설정 (초기 1회 실행) */
function initModalDrag() {
	const modal = document.getElementById("modal");
	const handle = modal.querySelector(".modal-handle");
	if (!handle) return;

	let isDragging = false;
	let startY = 0;
	let currentY = 0;

	const onDragStart = (e) => {
		isDragging = true;
		startY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;
		modal.classList.add("dragging");
	};

	const onDragMove = (e) => {
		if (!isDragging) return;
		const y = e.type.includes("touch") ? e.targetTouches[0].clientY : e.clientY;
		currentY = Math.max(0, y - startY);
		modal.style.transform = `translateY(${currentY}px)`;

		// 터치 스크롤 방지
		if (e.cancelable) e.preventDefault();
	};

	const onDragEnd = () => {
		if (!isDragging) return;
		isDragging = false;
		modal.classList.remove("dragging");

		if (currentY > 150) {
			closeModal();
		} else {
			modal.style.transform = "translateY(0)";
		}
		currentY = 0;
	};

	handle.addEventListener("mousedown", onDragStart);
	handle.addEventListener("touchstart", onDragStart, { passive: true });

	window.addEventListener("mousemove", onDragMove);
	window.addEventListener("touchmove", onDragMove, { passive: false });

	window.addEventListener("mouseup", onDragEnd);
	window.addEventListener("touchend", onDragEnd);
}

function closeModal() {
	const overlay = document.getElementById("modalOverlay");
	overlay.classList.remove("active");
	document.body.style.overflow = "";
}

// ============================
// 뷰 전환
// ============================
let currentView = "grid";

function toggleView() {
	const gridIcon = document.getElementById("gridIcon");
	const listIcon = document.getElementById("listIcon");
	const gridView = document.getElementById("timetableGrid");
	const listView = document.getElementById("listView");

	if (currentView === "grid") {
		currentView = "list";
		gridView.style.display = "none";
		listView.style.display = "block";
		gridIcon.style.display = "none";
		listIcon.style.display = "block";
		renderListView();
	} else {
		currentView = "grid";
		gridView.style.display = "block";
		listView.style.display = "none";
		gridIcon.style.display = "block";
		listIcon.style.display = "none";
	}
}

// ============================
// 이벤트 리스너 & 초기화
// ============================
document.addEventListener("DOMContentLoaded", () => {
	// 총 학점 표시
	document.getElementById("totalCredits").textContent = getTotalCredits();

	// 시간표 렌더링
	renderTimetable();
	renderTodayBanner();

	// 모달 드래그 초기화
	initModalDrag();

	// 초기 접기 상태 적용
	toggleTodayFold(true);

	// 뷰 전환 버튼
	document.getElementById("viewToggle").addEventListener("click", toggleView);

	// 오늘의 수업 컨트롤
	document
		.getElementById("prevDay")
		.addEventListener("click", () => moveDay(-1));
	document
		.getElementById("nextDay")
		.addEventListener("click", () => moveDay(1));
	document
		.getElementById("todayFold")
		.addEventListener("click", () => toggleTodayFold());

	// 모달 닫기
	document.getElementById("modalClose").addEventListener("click", closeModal);
	document.getElementById("modalOverlay").addEventListener("click", (e) => {
		if (e.target === e.currentTarget) closeModal();
	});

	// ESC 키로 모달 닫기
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape") closeModal();
	});
});
