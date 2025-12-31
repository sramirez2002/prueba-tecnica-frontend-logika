import "../styles/sidebar.css"
import logo from "../assets/logo2.svg"
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import GroupsIcon from '@mui/icons-material/Groups';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StorefrontIcon from '@mui/icons-material/Storefront';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CategoryIcon from '@mui/icons-material/Category';
export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <img src={logo} alt="Logo sidebar" className="sidebar-logo" />

      <nav className="sidebar-menu">
        <div className="sidebar-item">
            <HomeIcon className="sidebar-icon" />
            <button>Home</button>
        </div>

        <div className="sidebar-item active">
            <TimelineIcon className="sidebar-icon" />
            <button>Impacto Social</button>
        </div>

        <div className="sidebar-item">
            <GroupsIcon className="sidebar-icon" />
            <button>Comunidad</button>
        </div>

        <div className="sidebar-item">
           <AttachMoneyIcon className="sidebar-icon" />
            <button>Sponsors</button>
        </div>

        <div className="sidebar-item">
           <StorefrontIcon className="sidebar-icon" />
            <button>Marketplace</button>
        </div>

        <div className="sidebar-item">
           <WorkspacePremiumIcon className="sidebar-icon" />
            <button>Bakanes</button>
        </div>

        <div className="sidebar-item">
           <ContentCopyIcon className="sidebar-icon" />
            <button>Contenidos</button>
        </div>

        <div className="sidebar-item">
           <CategoryIcon className="sidebar-icon" />
            <button>Categorias de acciones</button>
        </div>
      </nav>

    </aside>
  )
}
