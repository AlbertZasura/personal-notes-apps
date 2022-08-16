import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
    
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this)
  }

  onKeywordChangeHandler(event) {
    this.setState(() => {
      return {
        keyword: event.target.value,
      };
    });
    console.log(event.target.value)
    this.props.onSearch(event.target.value);
  }
  render() {
    return (
      <div className="note-search">
        <input type="text" placeholder="Cari catatan ..." onChange={this.onKeywordChangeHandler} />
      </div>
    );
  }
}

export default SearchBar;
