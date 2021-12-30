import React from 'react';
import { Link } from '@reach/router';

const catgor= () => (
  <div className='row'>
    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link className="icon-box style-2 rounded" to="">
            <i className="fa fa-image"></i>
            <span>Art</span>
        </Link>
    </div>

    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link className="icon-box style-2 rounded" to="">
            <i className="fa fa-ship"></i>
            <span>Boats</span>
        </Link>
    </div>


    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link className="icon-box style-2 rounded" to="">
            <i className="fa fa-car"></i>
            <span>Cars</span>
        </Link>
    </div>

    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link className="icon-box style-2 rounded" to="">
            <i className="fa fa-shopping-bag"></i>
            <span>Fashion</span>
        </Link>
    </div>

    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link className="icon-box style-2 rounded" to="">
            <i className="fa fa-diamond"></i>
            <span>Jewlery</span>
        </Link>
    </div>

    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link className="icon-box style-2 rounded" to="">
            <i className="fa fa-plane"></i>
            <span>Planes</span>
        </Link>
    </div>


    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link className="icon-box style-2 rounded" to="">
            <i className="fa fa-home"></i>
            <span>Real Estate</span>
        </Link>
    </div>


    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link className="icon-box style-2 rounded" to="">
            <i className="fa fa-th"></i>
            <span>Watches</span>
        </Link>
    </div>

    <div className="col-md-2 col-sm-4 col-6 mb-3">
        <Link className="icon-box style-2 rounded" to="">
            <i className="fa fa-glass"></i>
            <span>Wine</span>
        </Link>
    </div>


  </div>
);
export default catgor;