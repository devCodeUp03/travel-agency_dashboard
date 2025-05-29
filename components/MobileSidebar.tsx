//@ts-nocheck
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { NavItems } from "components";

import { Link } from "react-router";

const MobileSidebar = () => {
  let sidebar: SidebarComponent;
  function toggleSidebar() {
    sidebar.toggle();
  }
  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Link to="/">
          <img
            src="/assets/icons/logo.svg"
            alt="logo"
            className="size-[30px]"
          />
          <h1>Tourvisto</h1>
        </Link>

        {/* @ts-ignore */}

        <button onClick={toggleSidebar}>
          <img src="/assets/icons/menu.svg" alt="menu" className="size-7" />
        </button>
      </header>
      <SidebarComponent
        width={270}
        // @ts-ignore
        ref={(Sidebar) => (sidebar = Sidebar)}
        created={() => sidebar.hide()}
        closeOnDocumentClick={true}
        showBackdrop={true}
        type="over"
      >
        <NavItems handleClick={toggleSidebar} />
      </SidebarComponent>
    </div>
  );
};

export default MobileSidebar;
