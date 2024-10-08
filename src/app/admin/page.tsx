"use client"
import SiteViewsChart  from './components/SiteViewsChart';
import Dashboard from './Dashboard'
import JobsTable from './components/JobsTable'
export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <Dashboard />
      <SiteViewsChart/>
      <JobsTable title='All jobs' limit={15}/>
    </div>
  )
}