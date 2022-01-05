import React, { memo, useCallback } from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { categories, status } from './constants/filters';
import { filterCategories, filterStatus, filterNftTitle } from '../../store/actions';

const ProfileFilterBar = (props) => {
  const dispatch = useDispatch();
  const handleCategory = useCallback((option) => {
    const { value } = option;
    dispatch(filterCategories({ value, singleSelect: true }));
  }, [dispatch]);

  const handleStatus = useCallback((option) => {
    const { value } = option;
    dispatch(filterStatus({ value, singleSelect: true }));
  }, [dispatch]);

  const filterNftTitles = useCallback((event) => {
    const value = event.target.value;
    dispatch(filterNftTitle(value));
  }, [dispatch]);

  const defaultValue = {
    value: null,
    label: 'Select Filter'
  };

  const customStyles = {
    option: (base, state) => ({
      ...base,
      background: "#fff",
      color: "#333",
      borderRadius: state.isFocused ? "0" : 0,
      "&:hover": {
        background: "#eee",
      }
    }),
    menu: base => ({
      ...base,
      borderRadius: 0,
      marginTop: 0
    }),
    menuList: base => ({
      ...base,
      padding: 0
    }),
    control: (base, state) => ({
      ...base,
      padding: 2
    })
  };

  return (
    <div className='row mt-30' >
      <div className='col-lg-12'>
        <div className="items_filter mt-10">
          {/* <i className="fa fa-search bg-color-secondary"></i> */}
          <div className='search-input'>
            <input type='text' name='email' id='email' className="form-control"
              placeholder='🔎 search'
              onChange={filterNftTitles}
            />
          </div>

          <div className='dropdownSelect one'>
            <Select
              styles={customStyles}
              menuContainerStyle={{ 'zIndex': 999 }}
              options={[defaultValue, ...categories]}
              onChange={handleCategory}
            />
          </div>

          <div className='dropdownSelect two'>
            <Select
              styles={customStyles}
              options={[defaultValue, ...status]}
              onChange={handleStatus}
            />
          </div>

          <div 
            className='share-btn' 
            style={{ position: 'relative', marginTop: 13, right: 0, marginRight: 10 }}
          >
            <span aria-hidden="true" className="icon_grid-2x2" onClick={()=>props.onSetBig(false)} style={{ color: !props.isBig ? '#000' : '#727272'}}></span>
            <span aria-hidden="true" className="icon_grid-3x3" onClick={()=>props.onSetBig(true)} style={{ color: props.isBig ? '#000' : '#727272'}}></span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default memo(ProfileFilterBar);