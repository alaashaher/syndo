import React from 'react'
import { NavLink } from 'react-router-dom'
import DocTitleScrollTop from '../../utils/DocTitleScrollTop';

const PageNotFound = () => {
  DocTitleScrollTop()

  return (
    <section className="ec-under-maintenance">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="under-maintenance">
              <h1>Error 404</h1>
              <h4>The page was not found.</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </p>
              <a className="btn btn-lg btn-primary" tabindex="0">
                <NavLink to="/">Back to Home</NavLink>
              </a>
            </div>
          </div>
          <div className="col-md-6 disp-768">
            <div className="under-maintenance">
              {/* <img
                className="maintenance-img"
                src="assets/images/common/404.png"
                alt="maintenance"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageNotFound
