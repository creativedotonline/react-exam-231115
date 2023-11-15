import Search from "../search/Search"
import UserListTable from "./UserListTable";

const UserList = () => {
    return (
        <section className="users_section layout_padding">
            <div className="users-container">
				<div className="container ">
					<Search />            
					<UserListTable />
				</div>
			</div>
        </section>
    );
};

export default UserList;