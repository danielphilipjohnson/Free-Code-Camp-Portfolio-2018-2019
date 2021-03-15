<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->

[![Daniel Philip Johnson header](https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/banner/banner.png)](https://danielphilipjohnson.github.io/)
<br />

<p align="center">
  <a href="https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019">
    <h3 align="center">HP business Calculator README</h3>
  </a>
</p>
  
<p align='center'>
  <a href="https://codepen.io/danielphilipjohnson/"><img height="30" src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/codepen.png"></a>&nbsp;&nbsp;
  <a href="https://twitter.com/danielp_johnson"><img height="30" src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/twitter.png"></a>&nbsp;&nbsp;
  <a href="https://www.instagram.com/danielphilipjohnson/"><img height="30" src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/instagram.jpg"></a>&nbsp;&nbsp;
  <a href="/"><img height="30" src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/dev.webp"></a>
  <a href="https://www.linkedin.com/in/daniel-philip-johnson/"><img height="30" src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/linkedin.png"></a>
</p>
<p align='center'>
<a class="header-badge" target="_blank" href="https://twitter.com/danielp_johnson">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/danielp_johnson?style=social">
  </a>
  
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/daniel-philip-johnson/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
</p>

  <p align="center">
    <br />
    <a href="https://codepen.io/danielphilipjohnson/full/abdpKOv">View Demo</a>
    ·
    <a href="https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/issues">Report Bug</a>
    ·
    <a href="https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

I took FreeCodeCamp Front End Development Libraries Projects to improve my front end skills. With this project I wanted to use my React skills to build a functioning calculator. The react app was styled with CSS.

The goal for For this project I decided to make the calculator look like HP 20b Business Consultant. For the math calculations, I used A small, fast JavaScript library for arbitrary-precision decimal arithmetic called big.js.

The lessons I learned in this project, is I successfully used useReducer and built a library for calculation.`,

I followed the freecodecamp user story:

<ul>  
 <li><b>User Story #1:</b> My calculator should contain a clickable element containing an = (equal sign) with a corresponding id="equals".</li>
<li><b>User Story #2:</b> My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: id="zero", id="one", id="two", id="three", id="four", id="five", id="six", id="seven", id="eight", and id="nine".</li>
<li><b>User Story #3:</b> My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: id="add", id="subtract", id="multiply", id="divide".</li>
<li><b>User Story #4:</b> My calculator should contain a clickable element containing a . (decimal point) symbol with a corresponding id="decimal".</li>
<li><b>User Story #5:</b> My calculator should contain a clickable element with an id="clear".</li>
<li><b>User Story #6:</b> My calculator should contain an element to display values with a corresponding id="display".</li>
<li><b>User Story #7:</b> At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of display.</li>
<li><b>User Story #8:</b> As I input numbers, I should be able to see my input in the element with the id of display.</li>
<li><b>User Story #9:</b> In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.</li>
<li><b>User Story #10:</b> When inputting numbers, my calculator should not allow a number to begin with multiple zeros.</li>
<li><b>User Story #11:</b> When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.</li>
<li><b>User Story #12:</b> I should be able to perform any operation (+, -, _, /) on numbers containing decimal points.</li>
<li><b>User Story #13:</b> If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + _ 7 = is entered, the result should be 35 (i.e. 5 _ 7); if 5 _ - 5 = is entered, the result should be -25 (i.e. 5 \* (-5)).</li>
<li><b>User Story #14:</b> Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.</li>
<li><b>User Story #15:</b> My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).</li></ul>

### Built With

Here are some of the major framworks I used for this project.

- [Bootstrap 4](https://getbootstrap.com)
- [JQuery](https://jquery.com)
- [React](https://reactjs.org/)

<!-- GETTING STARTED -->

## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019.git
   ```
2. Change into React Calculator App
   ```sh
   cd "2.Front-End-Libraries-Certification/4. Build a JavaScript Calculator"
   ```
3. Install dependencies
   ```JS
   yarn add
   ```
4. Builds the app for production to the `build` folder.\
   It correctly bundles React in production mode and optimizes the build for the best performance.
   ```JS
   yarn build
   ```

<!-- ROADMAP --><!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

See the [open issues](https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Feel free to make any contributions, if you are learning open source and want to practice this is a great place to start.
Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Daniel Philip Johnson - [@danielp_johnson](https://twitter.com/danielp_johnson) - daniel-philip-johnson@outlook.com

Project Link: [https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019](https://github.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Img Shields](https://shields.io)
- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Pages](https://pages.github.com)
- [Animate.css](https://daneden.github.io/animate.css)
- [Loaders.css](https://connoratherton.com/loaders)
- [Slick Carousel](https://kenwheeler.github.io/slick)
- [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
- [Sticky Kit](http://leafo.net/sticky-kit)
- [JVectorMap](http://jvectormap.com)
- [Font Awesome](https://fontawesome.com)
- [Big.js](https://github.com/MikeMcl/big.js/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
