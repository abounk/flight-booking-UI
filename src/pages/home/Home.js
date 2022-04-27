import React from "react"
import Navbar from "../../components/Navbar/Navbar"
import StickyHeadTable from "../../components/Table/StickyHeadTable"
import SearchBar from "../../components/SearchBar/SearchBar"

export const Home = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <StickyHeadTable />
    </>
  )
}
