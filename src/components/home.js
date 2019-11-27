import React, { Component } from 'react';

// Amplify.configure(aws_exports);
// console.log(aws_exports)
//declare query to listGames


class home extends React.Component {
  render() {
    return (
      // <Connect query={graphqlOperation(ListGames)}>
      //   {({ data, loading, errors }) => {
      //     if (loading) { return <div>Loading...</div>; }
      //     if (errors) console.log(errors);
      //     console.log(data.listGames);
      //     return <GamesList games={data.listGames.items} />
      //   }}
      // </Connect>
      <div className = "home">
        <div className = "title">
          <h1>Hello World</h1>
        </div>
        
      </div>
    );
  }
}
export default home;