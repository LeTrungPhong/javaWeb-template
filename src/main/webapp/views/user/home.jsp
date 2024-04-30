<%@  page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet"
	href="http://localhost:8080/appManageHotel-java-pj/Homecss" />
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
<script crossorigin
	src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin
	src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<title>Trang chu</title>
</head>
<body class="container">
	<section class="background-sign"></section>
	<section class="sign background-color-sign box-shadow-sign">
		<div class="sign-times">
			<i class="fas fa-cut sign-times__img"></i>
		</div>
		<div class="sign-account">
			<div class="sign-account-in">
				<h1 class="sign-account-in__title">Sign in</h1>
				<div class="sign-account-in__network">
					<i class="fab fa-facebook-f sign-account-in__network-item"></i> <i
						class="fab fa-google-plus-g sign-account-in__network-item"></i> <i
						class="fab fa-linkedin-in sign-account-in__network-item"></i>
				</div>
				<p class="sign-account-in__desc">or use your account</p>
				<form action="" class="sign-account-in-form" method="">
					<input type="text" class="sign-account-in-form__input"
						placeholder="Email" name=""> <input type="text"
						class="sign-account-in-form__input" placeholder="Password" name="">
					<a href="#" class="sign-account-in-form__link-forget">Forgot
						your password ?</a> <input class="sign-account-in-form__submit"
						value="SIGN IN" type="submit">
				</form>
			</div>
			<div class="sign-account-up">
				<h1 class="sign-account-up__title">Create Account</h1>
				<div class="sign-account-up__network">
					<i class="fab fa-facebook-f sign-account-up__network-item"></i> <i
						class="fab fa-google-plus-g sign-account-up__network-item"></i> <i
						class="fab fa-linkedin-in sign-account-up__network-item"></i>
				</div>
				<p class="sign-account-up__desc">or use your email for
					registration</p>
				<form action="" class="sign-account-up-form" method="">
					<input type="text" class="sign-account-up-form__input"
						placeholder="Name" name=""> <input type="text"
						class="sign-account-up-form__input" placeholder="Email" name="">
					<input type="text" class="sign-account-up-form__input"
						placeholder="Password" name=""> <input
						class="sign-account-up-form__submit" type="submit" value="SIGN UP">
				</form>
			</div>
		</div>
		<div class="sign-move">
			<div class="sign-move-up">
				<h1 class="sign-move-up__title">Hello, Friend!</h1>
				<p class="sign-move-up__desc">Enter your personal details and
					start journey with us</p>
				<button class="sign-move-up__button">SIGN UP</button>
			</div>
			<div class="sign-move-in">
				<h1 class="sign-move-in__title">Welcome Back!</h1>
				<p class="sign-move-in__desc">To keep connected with us please
					login with your personal info</p>
				<button class="sign-move-in__button">SIGN IN</button>
			</div>
		</div>
	</section>
	<header class="header">
		<div class="header__dashboard-name">Manage Hotel</div>
		<div class="header__dashboard">
			<div class="header__dashboard-search">
				<input type="text" class="header__dashboard-search__input"
					placeholder="Search for anything..." />
			</div>
			<div class="header__dashboard-notification">
				<i class="far fa-bell header__dashboard-notification-icon"></i>
			</div>
			<div class="header__dashboard-account">
				<i class="far fa-user header__dashboard-account-avatar"></i>
				<div class="header__dashboard-account-name">
					<p class="header__dashboard-account-name-text">Le Trung Phong</p>
				</div>
				<div class="header__dashboard-account-job">
					<p class="header__dashboard-account-job-text">Sinh vien</p>
				</div>
				<i class="fas fa-chevron-down header__dashboard-account-nav-img"></i>

				<div class="header__dashboard-account-nav dp-n">
					<a href="#" class="header__dashboard-account-nav-item">Sign
						in</a> <a href="#" class="header__dashboard-account-nav-item">Sign
						up</a>
				</div>
			</div>
		</div>
	</header>
	<nav class="nav">
		<div class="nav__bar">
			<i class="fas fa-chevron-left nav__bar-img"></i>
		</div>
		<div></div>
		<div class="nav__list">
			<div class="nav__list-item">
				<i class="fas fa-briefcase nav__list-item-img"></i> <a href=""
					class="nav__list-item-text">Check in</a>
			</div>
			<div class="nav__list-item">
				<i class="fas fa-briefcase nav__list-item-img"></i> <a href=""
					class="nav__list-item-text">Book room</a>
			</div>
			<div class="nav__list-item">
				<i class="fas fa-briefcase nav__list-item-img"></i> <a href=""
					class="nav__list-item-text">Confirm</a>
			</div>
			<div class="nav__list-item">
				<i class="fas fa-briefcase nav__list-item-img"></i> <a href=""
					class="nav__list-item-text">Service</a>
			</div>
			<div class="nav__list-item">
				<i class="fas fa-briefcase nav__list-item-img"></i> <a href=""
					class="nav__list-item-text">Check out</a>
			</div>
			<div class="nav__list-item">
				<i class="fas fa-briefcase nav__list-item-img"></i> <a href=""
					class="nav__list-item-text">Manage</a>
			</div>
		</div>
	</nav>

	<article class="content">
		<%-- 
        <section class="content__tool">
                <div class="content__tool-item">
                    <div class="content__tool-item-first">INSERT</div>
                    <div class="content__tool-item-second"></div>
                    <div class="content__tool-item-third"></div>
                </div>
                <div class="content__tool-item">
                    <div class="content__tool-item-first">DELETE</div>
                    <div class="content__tool-item-second"></div>
                    <div class="content__tool-item-third"></div>
                </div>
                <div class="content__tool-item">
                    <div class="content__tool-item-first">UPDATE</div>
                    <div class="content__tool-item-second"></div>
                    <div class="content__tool-item-third"></div>
                </div>
            </section>
        --%>


		<form class="content-form__tool" method="POST" action="/appManageHotel-java-pj/Home">
			<h1 class="content-form__tool-title"></h1>
			<div class="content-form__tool-item">
				<div class="content-form__tool-item-topic">ID</div>
				<input type="text" class="content-form__tool-item-text" name="id">
			</div>
			<div class="content-form__tool-item">
				<div class="content-form__tool-item-topic">Type</div>
				<input type="text" class="content-form__tool-item-text"
					name="TypeRoom">
			</div>
			<div class="content-form__tool-item">
				<div class="content-form__tool-item-topic">View</div>
				<input type="text" class="content-form__tool-item-text" name="">
			</div>
			<div class="content-form__tool-item">
				<div class="content-form__tool-item-topic">Cost</div>
				<input type="text" class="content-form__tool-item-text" name="Money">
			</div>
			<div class="content-form__tool-submit">
				<div class="content-form__tool-submit-cancel">CANCEL</div>
				<input type="submit" class="content-form__tool-submit-confirm"
					value="CONFIRM">
			</div>
			<input type="text" style="display: none" name="requestMethod"
				class="content-form__tool-method">
		</form>

		<table class="content__listroom"></table>
	</article>
	<footer class="footer"></footer>
	<script type="text/babel">
            const { useState } = React;

            function ContentListItemForm(course) {
                return (
                    <tr className="content__listroom-item">
                        <td className="content__listroom-item-id">
                            {course.id}
                        </td>
                        <td className="content__listroom-item-TypeRoom">
                            {course.TypeRoom}
                        </td>
                        <td
                            className={`content__listroom-item-Money ${
                                course.Check ? "color-green" : "color-red"
                            }`}
                        >
                            {course.Money}
                        </td>
                        <td className="content__listroom-item-check">
                            {course.Check ? (
                                <input
                                    type="checkbox"
                                    name=""
                                    id=""
                                    disabled
                                    checked
                                />
                            ) : (
                                <input type="checkbox" name="" id="" disabled />
                            )}
                        </td>
                        <td className="content__listroom-item-img">
                            <i className="fas fa-edit content__listroom-item-img-item update"></i>
                            <i className="fa fa-trash content__listroom-item-img-item delete"></i>
                            <i className="fas fa-ellipsis-h content__listroom-item-img-item desc"></i>
                        </td>
                    </tr>
                );
            }

            function RenderContentListItemForm(courses) {
                const [count, setCount] = useState([
                    0,
                    courses.APIcourse.length >= 10
                        ? 10
                        : courses.APIcourse.length,
                ]);

                const handleRenderDataUp = () => {
                    if (count[1] == courses.APIcourse.length) {
                        setCount((prev) => prev);
                    } else if (count[1] + 10 > courses.APIcourse.length) {
                        setCount((prev) => [
                            count[0] + 10,
                            courses.APIcourse.length,
                        ]);
                    } else {
                        setCount((prev) => [count[0] + 10, count[1] + 10]);
                    }
                };

                const handleRenderDataDown = () => {
                    if (count[0] == 0) {
                        setCount((prev) => prev);
                    } else if (count[1] == courses.APIcourse.length) {
                        setCount((prev) => [prev[0] - 10, prev[0]]);
                    } else {
                        setCount((prev) => [prev[0] - 10, prev[1] - 10]);
                    }
                };

                const getRenderData = courses.APIcourse.slice(
                    count[0],
                    count[1]
                );

                return (
                    <React.Fragment>
                        <div className="content__listroom-search">
                            <i className="fa fa-layer-group content__listroom-search-img"></i>
                            <div className="content__listroom-search-input-form">
                                <input
                                    className="content__listroom-search-input"
                                    type="text"
                                    placeholder=" Search"
                                />
                                <i class="fas fa-search content__listroom-search-input-img"></i>
                            </div>
                            <div className="select">
                                <div className="select__title">TypeRoom <i class="fas fa-caret-down select__title-img"></i><i class="fas fa-caret-up select__title-img dp-n"></i></div>
                                <div className="select__option dp-n">
                                    <div className="select__option-item">Basic Room</div>
                                    <div className="select__option-item">Normal Room</div>
                                    <div className="select__option-item">Vip Room</div>
                                </div>
                            </div>
                        </div>
                        <button className="content__listroom-button">
                            <i className="fa fa-plus content__listroom-button-img"></i>{" "}
                            Insert room
                        </button>
                        <tr className="content__listroom-space"></tr>
                        <tr className="content__listroom-item">
                            <td className="content__listroom-item-id">
                                ID{" "}
                                <i class="fa fa-sort content__listroom-item-icon"></i>
                            </td>
                            <td className="content__listroom-item-TypeRoom">
                                TypeRoom{" "}
                                <i class="fa fa-sort content__listroom-item-icon"></i>
                            </td>
                            <td className="content__listroom-item-Money">
                                <i class="fa fa-dollar-sign content__listroom-item-icon"></i>{" "}
                                Money
                            </td>
                            <td className="content__listroom-item-check">
                                Check{" "}
                                <i class="fa fa-check content__listroom-item-icon"></i>
                            </td>
                            <td className="content__listroom-item-img"></td>
                        </tr>
                        {getRenderData.map(function (course) {
                            return (
                                <ContentListItemForm
                                    id={course.id}
                                    TypeRoom={course.TypeRoom}
                                    Money={course.Money}
                                    Check={course.Check}
                                />
                            );
                        })}
                        <tr className="content__listroom-item">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="content__listroom-item-linepage">
                                {`${count[0] + 1}-${count[1]} of ${courses.APIcourse.length}`}
                            </td>
                            <td className="content__listroom-item-arrow">
                                <i class="fas fa-angle-left content__listroom-item-arrow-item"></i>
                                <i class="fas fa-angle-right content__listroom-item-arrow-item"></i>
                                <button
                                    className="content__listroom-item-arrow-button"
                                    onClick={handleRenderDataDown}
                                ></button>
                                <button
                                    className="content__listroom-item-arrow-button"
                                    onClick={handleRenderDataUp}
                                ></button>
                            </td>
                        </tr>
                    </React.Fragment>
                );
            }

            var courseAPI = "http://localhost:8080/appManageHotel-java-pj/Home-data-room";
            fetch(courseAPI)
                .then((res) => res.json())
                .then(function (courses) {
                    ReactDOM.render(
                        <RenderContentListItemForm APIcourse={courses} />,
                        document.querySelector(".content__listroom")
                    );
                });

            var contentListRoomItemArrow = document.getElementsByClassName(
                "content__listroom-item-arrow"
            );
            var contentListRoomItemArrowItem = document.getElementsByClassName(
                "content__listroom-item-arrow-item"
            );
            var contentListRoomItemArrowButton =
                document.getElementsByClassName(
                    "content__listroom-item-arrow-button"
                );

            setTimeout(() => {
                for (let i = 0; i < contentListRoomItemArrowItem.length; ++i) {
                    contentListRoomItemArrowItem[i].addEventListener(
                        "click",
                        () => {
                            contentListRoomItemArrowButton[i].click();
                        }
                    );
                }
            }, 200);

            setTimeout(() => {
                    var select = document.querySelector('.select__title');
                    var selectOption = document.querySelector('.select__option');
                    var selectTitleImg = document.getElementsByClassName('select__title-img');

                    select.addEventListener('click', () => {
                        selectTitleImg[0].classList.toggle('dp-n');
                        selectTitleImg[1].classList.toggle('dp-n');
                        selectOption.classList.toggle('dp-n');
                    });

                    var contentFormToolMethod = document.querySelector('.content-form__tool-method');
                    var contentListRoomButton = document.querySelector('.content__listroom-button');
                    contentListRoomButton.addEventListener('click', () => {
                    contentFormToolMethod.value = "0";
                });
            },100)
        </script>
</body>
<script
	src="http://localhost:8080/appManageHotel-java-pj/Homejs"></script>
</html>