
```javascript
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../store/slices/forecastSlice';
import './FilterPanel.css';

const FilterPanel = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector(state => state.forecast);

  const handleFilterChange = (filterName, value) => {
    dispatch(setFilters({ [filterName]: value }));
  };

  return (
    <div className="filter-panel">
      <div className="filter-group">
        <label>Date Range</label>
        <select 
          value={filters.dateRange}
          onChange={(e) => handleFilterChange('dateRange', e.target.value)}
        >
          <option value="7d">Last 7 Days</option>
          <option value="30d">Last 30 Days</option>
          <option value="90d">Last 90 Days</option>
          <option value="1y">Last Year</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Product Category</label>
        <select 
          value={filters.category}
          onChange={(e) => handleFilterChange('category', e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="apparel">Apparel</option>
          <option value="food">Food & Beverage</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Region</label>
        <select 
          value={filters.region}
          onChange={(e) => handleFilterChange('region', e.target.value)}
        >
          <option value="all">All Regions</option>
          <option value="north">North</option>
          <option value="south">South</option>
          <option value="east">East</option>
          <option value="west">West</option>
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;
```

#
