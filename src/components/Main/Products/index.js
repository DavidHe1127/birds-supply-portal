import React, { Component } from 'react';

import { Header, Search, Container } from 'semantic-ui-react';

// import styled from 'styled-components';

export default class Products extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Search />
        </Header>
      </Container>
    );
  }
}


            // loading={isLoading}
            // onResultSelect={this.handleResultSelect}
            // onSearchChange={this.handleSearchChange}
            // results={results}
            // value={value}
            // {...this.props}