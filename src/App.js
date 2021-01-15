import React, { Component } from "react";
import Result from "./Result";
import "./App.css";
import $ from "jquery";
import Cookies from "js-cookie";
class App extends Component {
  state = {
    show_result: false,
    search_query: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const query = document.getElementById("search-input").value.trim();
    if (query.length > 0 && query !== this.state.search_query) {
      this.setState({
        show_result: true,
        search_query: query,
      });
    }
  };

  componentDidMount() {
    if ($("body").hasClass("body-dark")) {
      document.getElementById("btn-dark-mode").innerHTML = "Light Mode";
    }
    $("#search-input").on("keypress", function (e) {
      if (e.key === "Enter") {
        $("#btn-submit").trigger("click");
      }
    });
  }

  toggleDarkMode = (e) => {
    $("body").toggleClass("body-dark");
    $("body").toggleClass("body-light");
    if ($("body").hasClass("body-dark")) {
      Cookies.set("dark", 1);
      document.getElementById("btn-dark-mode").innerHTML = "Light Mode";
    } else {
      Cookies.set("dark", 0);
      document.getElementById("btn-dark-mode").innerHTML = "Dark Mode";
    }
  };

  render() {
    return (
      <div className="App">
        <main className="mt-5">
          <div
            className="align-content-center my-auto mt-auto h-100"
            style={{ verticalAlign: "middle" }}
          >
            <div className="col">
              <img
                className=" app-logo img-fluid"
                src="app_icon.png"
                alt="Torrent Search"
              ></img>
              <div>
                <span className="h1 app-name">Torrent Search</span>
              </div>
              <div className="container center">
                <div className="input-group input-group-lg mt-4">
                  <input
                    id="search-input"
                    type="text"
                    className="form-control input-red"
                    placeholder="Search Here"
                  ></input>
                </div>
                <div className="row justify-content-center">
                  <div className="pl-2 pr-2">
                    <button
                      id="btn-submit"
                      type="submit"
                      className="btn search-button text-white"
                      onClick={this.handleSubmit}
                    >
                      Search
                    </button>
                  </div>
                  <div className="pl-2 pr-2">
                    <button
                      id="btn-dark-mode"
                      className="btn btn-light dark-mode-button"
                      onClick={this.toggleDarkMode}
                    >
                      Dark Mode
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.state.show_result ? (
            <Result query={this.state.search_query} />
          ) : null}
        </main>
        <footer className="page-footer m-5">
          <div>
            <div className="row justify-content-center">
              <div className="m-2">
                <a
                  href="https://github.com/Torrent-Search/torrent-search-web"
                  className="social-custom-link"
                >
                  <i className="devicon-github-original social-icons"></i>
                </a>
              </div>
              <div className="m-2">
                <a
                  href="mailto:tejasvp25@gmail.com"
                  className="social-custom-link"
                >
                  <i className="devicon-google-plain social-icons"></i>
                </a>
              </div>
            </div>
            <div className="row justify-content-center">
              <h5 className="ml-2">Made with React</h5>&nbsp;
              <i
                className="devicon-react-original-wordmark colored"
                style={{ fontSize: "30px" }}
              ></i>
            </div>
          </div>
          <div className="row justify-content-center text-center pt-1">
            <div className="row justify-content-center text-secondary">
              <span className="text-secondary">
                Tejasvp25 © 2020 · Made with{" "}
                <span role="img">
                  <img
                    src="https://madewithlove.org.in/favicon-16x16.png?v=ngkxyOrw9y"
                    alt="love"
                  />
                  &nbsp;
                </span>
                in India
              </span>
            </div>{" "}
          </div>
        </footer>
      </div>
    );
  }

  // render() {
  //   return <Result />;
  // }
}

export default App;