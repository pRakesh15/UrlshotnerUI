import React, { useEffect, useState } from 'react'
import { Audio } from 'react-loader-spinner';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "../ui/card"

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import { Calendar, Link } from 'lucide-react'
import { Button } from "../ui/button"
import { useContextStore } from '@/Context/ContextApi'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '@/main'

// Define the type for our URL click data
interface UrlClickData {
  clickDate: string;
  count: number;
}



// Define type for date range state
interface DateRange {
  from: Date;
  to: Date;
}

const UrlAnalyticsDashboard: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<UrlClickData[]>()
  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(new Date().setDate(new Date().getDate() - 7)),
    to: new Date()
  })
  const navigate = useNavigate()
  const { token } = useContextStore();
  if (!token) {
    navigate("/login")
  }

  const fetchUrlAnalytics = async () => {
    try {

      setLoading(true)
      const startDate = dateRange.from.toISOString().split("T")[0];
      const endDate = dateRange.to.toISOString().split("T")[0];

      // console.log(startDate,endDate);

      const response = await axios.get<UrlClickData[]>(
        `${baseUrl}/urls/analytics/getAllCounts`,
        {
          params: { startDate, endDate },
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`, // Attach Bearer token
          },
        }
      );

      const transformedData = Object.entries(response.data).map(([date, count]) => ({
        clickDate: date,
        count: Number(count)
      }));
      // console.log(transformedData.length)
      setData(transformedData);
    } catch (error) {
      console.error("Error fetching analytics:", error);
      // Fallback data
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUrlAnalytics();
  }, [])


  const handleFromDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateRange(prev => ({
      ...prev,
      from: new Date(e.target.value)
    }))
  }

  const handleToDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateRange(prev => ({
      ...prev,
      to: new Date(e.target.value)
    }))
  }

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center">
          <Link className="mr-2" /> URL Analytics Dashboard
        </h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium">From:</label>
            <input
              type="date"
              value={dateRange.from.toISOString().split('T')[0]}
              onChange={handleFromDateChange}
              className="border rounded px-2 py-1"
            />
            <label className="text-sm font-medium">To:</label>
            <input
              type="date"
              value={dateRange.to.toISOString().split('T')[0]}
              onChange={handleToDateChange}
              className="border rounded px-2 py-1"
            />
          </div>
          <Button onClick={fetchUrlAnalytics} className='cursor-pointer bg-purple-900 text-white'>
            <Calendar className="mr-2" /> Fetch Analytics
          </Button>
        </div>
      </div>
      {
        loading ? (<Audio
          height="80"
          width="80"
          color="#085759"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass="flex items-center justify-center"
          visible={true}
        />) : (data?.length===0 ?( <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg border border-gray-200">
          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 005.656 0M9 12a4 4 0 01-4-4V6h4M15 12a4 4 0 004 4v2h-4M15 12a4 4 0 00-4-4V8h4" />
            </svg>
            <h2 className="text-xl font-semibold text-gray-600 mb-2">No Data Available</h2>
            <p className="text-gray-500">There is currently no data to analyze.</p>
          </div>
        </div>):(<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Daily URL Clicks - Bar Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <XAxis dataKey="clickDate" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#085759" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>URL Clicks Distribution - Pie Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="count"
                    nameKey="clickDate"
                    fill="#5E115C"
                    label
                  />
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>))
      }

      <div className=' p-2 flex justify-center mt-7'>
        <Button className='bg-purple-900 text-white p-5'>
          Create a new short url
        </Button>
      </div>
      {/* here we can add a component that show the  list of all urls.... */}
    </div>
  )
}

export default UrlAnalyticsDashboard

