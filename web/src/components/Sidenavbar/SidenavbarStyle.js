import styled from "styled-components";

import { FiFileText, FiTrash2, FiStar, FiHome } from "react-icons/fi";
import { GiCastle } from "react-icons/gi";
/*Icons settings*/

const SiglaUniversity = styled(GiCastle)`
  color: #333;
  font-size: 18px;
  margin-left: 8px;
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
  background: #fff;
  display: flex;
  flex-direction: column;
  color: #333;
  height: 100%;
`;

const SideNavBarTop = styled.section`
  flex: 1;
`;

const SideNavBarTopProfile = styled.div`
  display: flex;
  align-itens: center;
  justify-content: center;
  padding: 15px;
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
  font-weight: bold;
  font-family: "Oswald", sans-serif;
  font-size: 1.1em;
`;

const ProfileTitle = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 10px;
  font-family: "Oswald", sans-serif;
  font-size: 15px;
  color: #2e0094;
  font-weight: bold;
  letter-spacing: 0.2px;
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
    width: 6em;
    position: absolute;
    color: #333;
    border-radius: 3px;
    box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.5),
      -6px -6px 10px rgba(255, 255, 255, 0.5),
      6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15);
    left: 10px;
    padding-bottom: 4px;
  }

  .dropdown-menu button {
    border: none;
    font-size: 12px;
    background: #fff;
    width: 100%;
    padding: 5px 8px;
    text-align: left;
    text-transform: uppercase;
    border-bottom: 0.2px solid rgba(51, 51, 51, 0.3);
    cursor: pointer;

    &:last-child {
      border-bottom: none;
    }
  }
`;

const SideNavBarTopSearch = styled.div`
  padding: 15px;
`;

const SearchBlock = styled.div`
  display: flex;
  align-itens: center;
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
  margin-top: 10px;

  ul {
    li {
      a {
        display: flex;
        align-items: center;
        padding: 10px 18px;
        color: #333;
        text-decoration: none;

        .icon {
          font-size: 14px;
          margin-right: 8px;
        }

        &:hover {
          cursor: pointer;
        }

        &:focus,
        &:active {
          background: #f1f1f1;
        }
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
};
