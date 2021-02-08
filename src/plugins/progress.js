import NProgress from 'nprogress'
import "nprogress/nprogress.css"

const template =  `
        <div class="bar" role="bar">
            <div class="peg"></div>
        </div>
        <div role="spinner">
            <div class="loading-content">
              <div class='loader-container'>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
            </div>
              <svg id="hidden-svg" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                  <filter id="gooey">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                  </filter>
                </defs>
              </svg>
        </div>
    `
NProgress.configure({ template: template })

export {
  NProgress
};
