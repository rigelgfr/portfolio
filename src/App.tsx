import { LeftSidebar } from "./components/layout/Sidebar"
import Main from "./components/layout/Main"
import { RightEmpty } from "./components/layout/Empty"

export default function Page() {
  return (
    <div className="flex h-screen">
      <LeftSidebar/>
      <Main />
      <RightEmpty/>
    </div>
  )
}