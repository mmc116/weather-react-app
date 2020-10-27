import React from "react";

export default function Search () {
  return  (<div className="search">
          <form>
            <input
              type="search"
              id="search-input"
              placeholder="Search City"
              autoComplete="off"
            />
            <button id="search-button">
              <i className="fas fa-search"></i>
            </button>
          </form>
    </div>
    )
    }