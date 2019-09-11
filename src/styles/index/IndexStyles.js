import styled from 'styled-components';

const IndexPageWrapper = styled.div`
  transition: ${props => props.theme.transition};

  .indexIntro {
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 15px auto 0;
    max-width: 1000px;

    h1 {
      color: ${props => props.theme.textColor};
      letter-spacing: 0.5px;
    }

    .introSocialLinks {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 90vw;
      max-width: 350px;
      margin: 0;
      li {
        list-style-type: none;
        height: 45px;
        width: 45px;
        transition: 0.2s;
      }
      li:hover {
        transform: translateY(-10px);
      }
      .icon {
        transition: ${props => props.theme.transition};
        height: 15px;
        width: auto;
        fill: ${props => props.theme.textColor};
      }
    }
  }

  .downArrowLink {
    width: 80%;
    margin: -20px auto 0;
    text-align: center;

    svg {
      height: 50px;
      width: auto;
      margin: 0 0;
      .icon {
        transition: ${props => props.theme.transition};
        fill: ${props => props.theme.textColor};
      }
    }
  }

  #blogPosts {
    /* position: relative; */
    /* z-index: 0; */
    padding-top: 60px;
    margin-top: -40px;
    h1 {
      margin: 30px 0 0;
    }
  }

  @media (min-width: 850px) {
    .indexIntro {
      /* margin-left: 5vw; */

      h1 {
        font-size: 3rem;
      }

      .introSocialLinks {
        li {
          height: 55px;
          width: 55px;
        }
        .icon {
          height: 25px;
        }
      }
    }
  }
`;

export { IndexPageWrapper };
