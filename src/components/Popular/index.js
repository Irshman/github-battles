import Repos from './Repos';
import Tabs from './Tabs';
// import Loader from '../Loader';

const Popular = () => {
  return (
      <div className='popular'>
        <h1 className='title'>Popular</h1>
        <Tabs />
        <Repos />
      </div>
    );
  }

export default Popular;

// Class component

// import React from 'react';
// import Repos from './Repos';
// import Tabs from './Tabs';
// import { fetchPopularRepos } from '../api';
// import Loader from '../Loader';
// import { connect } from 'react-redux';
// import { updateLanguage } from '../../redux/popular/popular.actions';

// const mapStateToProps = (state) => ({
//   selectedLanguage: state.popularReducer.selectedLanguage,
//   repos: state.popularReducer.repo
// });

// class Popular extends React.Component {
//   state = {
//     selectedLanguage: 'All',
//     repos: [],
//     isFetching: false
//   };

//   componentDidMount() {
//     this.fetchPopularReposHandler(this.props.selectedLanguage)
//   }

//   updateLanguage = (language) => {
//     if(language === this.props.selectedLanguage) return;
//     this.setState({selectedLanguage: language})
//     this.fetchPopularReposHandler(language)
//   };

//   fetchPopularReposHandler = (language) => {
//     this.setState({isFetching: true})
//     fetchPopularRepos(language)
//     .then(repos => this.setState({repos: repos, isFetching: false}))
//   }

//   render() {
//     return (
//       <div className='popular'>
//         <h1 className='title'>Popular</h1>
//         <Tabs
//           updateLanguage={this.updateLanguage}
//           selectedLanguage={this.props.selectedLanguage}
//         />
//         {this.props.repos.length ? <Repos repos={this.props.repos} />  : null}
//         {/* {this.state.isFetching ? <Loader /> : <Repos repos={this.props.repos} />} */}
//       </div>
//     );
//   }
// };

// export default connect(mapStateToProps)(Popular);