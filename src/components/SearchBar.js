import React from 'react'

class SearchBar extends React.Component {
  render() { 
    return (
      <div className='note-search'>
        <input type="text" placeholder='Cari catatan ...'/>
      </div>
    );
  }
}
 
export default SearchBar;