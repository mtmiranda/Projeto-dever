import styled from "styled-components";

import { FiFileText, FiTrash2, FiStar, FiHome, FiUser, FiLogOut } from "react-icons/fi";
import { GiCastle } from "react-icons/gi";
/*Icons settings*/

const FileLogOut = styled(FiLogOut)`
  color: #333;
  font-size: 15.5px;
  margin-right: 4px;
`;

const FilePerfil = styled(FiUser)`
  color: #333;
  font-size: 15.5px;
  margin-right: 4px;
`;


const SiglaUniversity = styled(GiCastle)`
  color: #333;
  font-size: 30px;
  margin-right: 8px;
  color: #2e0094;
`;

const FileHome = styled(FiHome)`
  color: #333;
  font-size: 18px;
  margin-right: 3px;
`;

const FilePlus = styled(FiFileText)`
  color: #333;
  font-size: 18px;
  margin-right: 3px;
`;

const FileTrash = styled(FiTrash2)`
  color: #333;
  font-size: 18px;
  margin-right: 3px;
`;

const FileStar = styled(FiStar)`
  color: #333;
  font-size: 18px;
  margin-right: 3px;
`;

const SideNavBar = styled.section`
  width: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  color: #333;
  height: 100%;

  a.active {
    box-shadow: rgba(0,0,0,0.05) 0px 0.2rem 0.2rem;
    background: #fff;

  }
`;

const SideNavBarTop = styled.section`
  flex: 1;
`;

const SideNavBarTopProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 15px;
  width: 40%;
`;

const ProfileIcon = styled.div`
  background: #f8cbad;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UniversityDescription = styled.div`
  margin-left: 27px;
  font-size: 1.2em;
  font-weight: bold;
  font-family: inherit;
  text-transform: uppercase;
  width: 50%;
  display: flex;
  align-items: center;
  
  p {
    margin-top: 5px;
    font-family: "Oswald", sans-serif;
    letter-spacing: .5px;
    color: #2e0094;
    font-weight: bold;
    opacity: 0.9;
  }

`;

const ProfileTitle = styled.div`
  
  .container {
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 10px;

  font-size: 15px;
  color: #333;
  font-weight: bold;
  opacity: 0.9;
  .icon {
    margin: 0 10px;
    font-size: 12px;
  }

  .dropdown-toggle {
    position: relative;
    cursor: pointer;
  }

  .dropdown-toggle .dropdown-menu {
    display: none;
    background: #fff;
    width: 12rem;
    max-width: calc(100vw - 24px);
    position: absolute;
    color: rgb(55,53,47);
    border-radius: 3px;
    box-shadow: rgba(15,15,15,0.03) 0px 0px 0px 1px, rgba(15,15,15,0.1) 0px 3px 4px, rgba(15,15,15,0.2) 0px 9px 18px;
    left: -134px;
    padding-bottom: 4px;
    height: 100px;
    top: 30px;
    h2 {
      color: rgba(55, 53, 47, 0.6);
      margin-bottom: 1px;
    padding: 12px;
    box-shadow: rgba(55, 53, 47, 0.09) 0px 1px 0px;
    }

  }

  .dropdown-menu button {
    font-family: "Oswald", sans-serif;
    border: none;
    font-size: 14px;
    background: #fff;
    width: 100%;
    padding: 5px 8px;
    text-align: left;
    cursor: pointer;

    &:last-child {
      border-bottom: none;
    }
    
    &:focus {
      border: none;
    }
  }
  }
`;

const SideNavBarTopSearch = styled.div`
  padding: 15px;
`;

const SearchBlock = styled.div`
  display: flex;
  align-items: center;
  background: #f1f1f1;
  padding: 6px 10px;
  border-radius: 50px;

  .icon {
    font-size: 16px;
    margin: 5px;
  }

  input {
    color: #333;
    margin-left: 10px;
    background: none;
    outline: none;
    border: none;
  }
`;

const SideNavBarTopCreateNote = styled.div`
  padding: 0 15px;
  color: #fff;
`;

const NoteButton = styled.div`
  background: linear-gradient(90deg, #00e3d3 0%, #3d00c6 100%);
  opacity: 0.9;
  padding: 6px 10px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0.2rem 0.2rem;
  margin-top: 20px;
  .icon {
    font-size: 14px;
    margin: 5px;
  }
`;

const NoteTitle = styled.div`
  margin-left: 12px;
`;

const SideNavBarTopMenuItem = styled.div`
  margin-top: 83px;
  display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

  ul {
    li {
      a {
        display: flex;
        align-items: center;
        padding: 10px 18px;
        color: #333;
        text-decoration: none;
        background: rgba(241, 241, 241, .5);
        text-align: center;
    width: 56px;
    display: flex;
    flex-direction: column;
    margin-bottom: 14px;
    padding: 24px 16px;
    border-radius: 5px;
    font-size: 13px;
    box-shadow: inset -2px -2px 6px rgba(255,255,255,0.7), inset -2px -2px 4px rgba(255,255,255,0.5), inset 2px 2px 2px rgba(255,255,255,0.075), inset 2px 2px 4px rgba(0,0,0,0.15);
         svg {
          margin-bottom: 6px;
         }

        .icon {
          font-size: 14px;
          margin-right: 8px;
        }
/*
        &:hover {
          cursor: pointer;
        }

        &:focus,
        &:active {
          background: #f1f1f1;
        }*/
      }
    }
  }
`;

const SideNavBarBottom = styled.div`
  padding: 8px 15px;
  border-top: 1px solid #555;
`;

const SideNavBarBottomNeedHelp = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;

  .icon {
    font-size: 14px;
    margin-right: 8px;
  }
`;

export {
  SideNavBar,
  SideNavBarTop,
  SideNavBarTopProfile,
  ProfileIcon,
  ProfileTitle,
  SideNavBarTopSearch,
  SearchBlock,
  SideNavBarTopCreateNote,
  NoteTitle,
  NoteButton,
  SideNavBarTopMenuItem,
  SideNavBarBottom,
  SideNavBarBottomNeedHelp,
  FilePlus,
  FileTrash,
  FileStar,
  FileHome,
  UniversityDescription,
  SiglaUniversity,
  FilePerfil,
  FileLogOut,
};
