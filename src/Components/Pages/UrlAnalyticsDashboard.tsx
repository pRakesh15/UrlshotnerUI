import React, { useEffect, useState } from 'react'
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

// Dummy data for demonstration
const dummyData: UrlClickData[] = [
  { clickDate: '2025-03-18', count: 45 },
  { clickDate: '2025-03-19', count: 78 },
  { clickDate: '2025-03-20', count: 62 },
  { clickDate: '2025-03-21', count: 91 }
]

// Define type for date range state
interface DateRange {
  from: Date;
  to: Date;
}

const UrlAnalyticsDashboard: React.FC = () => {
  const [data, setData] = useState<UrlClickData[]>(dummyData)
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
      console.log(typeof (transformedData[0].clickDate))
      console.log(typeof (transformedData[0].count))
      setData(transformedData);
    } catch (error) {
      console.error("Error fetching analytics:", error);
      setData(dummyData); // Fallback data
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>

      <div className=' p-2 flex justify-center mt-7'>
        <Button className='bg-purple-900 text-white p-5'>
          Create a new short url
        </Button>
      </div>
    </div>
  )
}

export default UrlAnalyticsDashboard

