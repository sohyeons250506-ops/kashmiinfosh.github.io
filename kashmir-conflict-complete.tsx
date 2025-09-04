import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Calendar, Shield, Users, AlertTriangle, ExternalLink, Info, X } from 'lucide-react';

const KashmirConflictDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPopup, setSelectedPopup] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const timelineData = [
    { year: 1947, casualties: 3000 },
    { year: 1965, casualties: 6800 },
    { year: 1971, casualties: 15000 },
    { year: 1989, casualties: 2000 },
    { year: 1999, casualties: 1500 },
    { year: 2016, casualties: 19 },
    { year: 2019, casualties: 40 },
    { year: 2025, casualties: 77 }
  ];

  const casualtyData = [
    { year: '1989-2000', civilians: 15000, militants: 8000, security: 5000 },
    { year: '2001-2010', civilians: 8000, militants: 6000, security: 3500 },
    { year: '2011-2020', civilians: 2000, militants: 1500, security: 1000 },
    { year: '2021-2025', civilians: 500, militants: 400, security: 300 }
  ];

  const territoryData = [
    { name: '인도', area: 101387, color: '#FF8C00' },
    { name: '파키스탄', area: 85846, color: '#32CD32' },
    { name: '중국', area: 37555, color: '#FF4500' }
  ];

  const countryImpactData = [
    { 
      country: '인도', 
      impact: 95, 
      type: 'direct',
      flag: '🇮🇳',
      details: '카슈미르 영토 분쟁의 주요 당사국. 2025년 Pahalgam 공격으로 26명 사망',
      coordinates: { x: 65, y: 45 }
    },
    { 
      country: '파키스탄', 
      impact: 95, 
      type: 'direct',
      flag: '🇵🇰',
      details: '카슈미르 영토 분쟁의 주요 당사국. Operation Sindoor로 31명 사망',
      coordinates: { x: 55, y: 45 }
    },
    { 
      country: '중국', 
      impact: 75, 
      type: 'direct',
      flag: '🇨🇳',
      details: 'Aksai Chin 지역을 실효 지배. 일대일로 프로젝트에 영향',
      coordinates: { x: 75, y: 35 }
    },
    { 
      country: '미국', 
      impact: 60, 
      type: 'global',
      flag: '🇺🇸',
      details: '중재 역할 수행. TRF를 테러조직으로 지정',
      coordinates: { x: 15, y: 25 }
    },
    { 
      country: '아프가니스탄', 
      impact: 45, 
      type: 'regional',
      flag: '🇦🇫',
      details: '국경 지역 불안정으로 테러 조직 활동 증가',
      coordinates: { x: 50, y: 40 }
    },
    { 
      country: '방글라데시', 
      impact: 35, 
      type: 'regional',
      flag: '🇧🇩',
      details: '난민 유입과 지역 안정성에 영향',
      coordinates: { x: 70, y: 50 }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">카슈미르 분쟁 데이터 분석</h1>
          <p className="text-gray-600">신뢰할 만한 언론 보도를 바탕으로 한 종합적 분석 (1947-2025)</p>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-lg shadow-sm border mb-6">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Shield className="h-4 w-4 mr-2" />
              개요 및 현황
            </button>
            <button
              onClick={() => setActiveTab('casualties')}
              className={`flex items-center py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'casualties'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <AlertTriangle className="h-4 w-4 mr-2" />
              사상자 통계
            </button>
            <button
              onClick={() => setActiveTab('countries')}
              className={`flex items-center py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'countries'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              영향받은 국가
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="min-h-[600px]">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <div className="flex items-center">
                    <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
                    <div>
                      <p className="text-sm text-red-600 font-medium">총 사상자</p>
                      <p className="text-2xl font-bold text-red-700">47,000+</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center">
                    <Calendar className="h-8 w-8 text-blue-600 mr-3" />
                    <div>
                      <p className="text-sm text-blue-600 font-medium">분쟁 기간</p>
                      <p className="text-2xl font-bold text-blue-700">78년</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <div className="flex items-center">
                    <Shield className="h-8 w-8 text-orange-600 mr-3" />
                    <div>
                      <p className="text-sm text-orange-600 font-medium">주요 전쟁</p>
                      <p className="text-2xl font-bold text-orange-700">4회</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="flex items-center">
                    <Users className="h-8 w-8 text-green-600 mr-3" />
                    <div>
                      <p className="text-sm text-green-600 font-medium">영향받은 인구</p>
                      <p className="text-2xl font-bold text-green-700">16.6M</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Chart */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">주요 사건 타임라인</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={timelineData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="casualties" stroke="#FF6B6B" fill="#FFE0E0" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Territory Distribution */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">지역별 면적 분할</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={territoryData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="area"
                    >
                      {territoryData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === 'casualties' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">기간별 사상자 통계</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={casualtyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="civilians" stackId="a" fill="#FF6B6B" name="민간인" />
                    <Bar dataKey="militants" stackId="a" fill="#4ECDC4" name="무장세력" />
                    <Bar dataKey="security" stackId="a" fill="#45B7D1" name="보안군" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">2025년 주요 사건</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">Pahalgam 테러 공격</p>
                        <p className="text-sm text-gray-600">2025-04-22</p>
                        <p className="text-xs text-blue-600">출처: Wikipedia, Al Jazeera</p>
                      </div>
                      <span className="text-red-600 font-bold">26명</span>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">Operation Sindoor</p>
                        <p className="text-sm text-gray-600">2025-05-07</p>
                        <p className="text-xs text-blue-600">출처: Stimson Center, CSIS</p>
                      </div>
                      <span className="text-red-600 font-bold">31명</span>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">파키스탄 보복 공격</p>
                        <p className="text-sm text-gray-600">2025-05-08</p>
                        <p className="text-xs text-blue-600">출처: ABC News, House of Commons</p>
                      </div>
                      <span className="text-red-600 font-bold">16명</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'countries' && (
            <div className="space-y-6">
              {/* Interactive World Map */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">카슈미르 분쟁 영향 지도 (클릭하여 상세보기)</h3>
                <div className="relative">
                  <svg 
                    viewBox="0 0 100 60" 
                    className="w-full h-96 border rounded bg-blue-50"
                    style={{ maxHeight: '400px' }}
                  >
                    <rect width="100" height="60" fill="#E6F3FF"/>
                    
                    <path d="M45,15 L85,15 L85,50 L45,50 Z" fill="#D1E7DD" stroke="#AAD4B8" strokeWidth="0.2"/>
                    <path d="M35,10 L50,10 L50,35 L35,35 Z" fill="#D1E7DD" stroke="#AAD4B8" strokeWidth="0.2"/>
                    <path d="M5,15 L35,15 L35,45 L5,45 Z" fill="#D1E7DD" stroke="#AAD4B8" strokeWidth="0.2"/>
                    
                    {countryImpactData.map((country, index) => (
                      <g key={index}>
                        <circle
                          cx={country.coordinates.x}
                          cy={country.coordinates.y}
                          r={country.impact / 15}
                          fill={
                            country.type === 'direct' ? '#FF4444' :
                            country.type === 'regional' ? '#FF8800' : '#4488FF'
                          }
                          fillOpacity={0.7}
                          stroke={
                            country.type === 'direct' ? '#CC0000' :
                            country.type === 'regional' ? '#CC6600' : '#0066CC'
                          }
                          strokeWidth={0.5}
                          className="cursor-pointer hover:fill-opacity-90 transition-all duration-200"
                          onClick={() => setSelectedCountry(country)}
                        />
                        <text
                          x={country.coordinates.x}
                          y={country.coordinates.y - (country.impact / 15) - 1}
                          textAnchor="middle"
                          className="fill-gray-700 text-xs font-medium cursor-pointer"
                          fontSize="2"
                          onClick={() => setSelectedCountry(country)}
                        >
                          {country.flag}
                        </text>
                      </g>
                    ))}
                    
                    <circle cx="62" cy="42" r="3" fill="#FF0000" fillOpacity="0.9" stroke="#990000" strokeWidth="0.5"/>
                    <text x="62" y="38" textAnchor="middle" className="fill-red-800 font-bold" fontSize="2">카슈미르</text>
                  </svg>
                  
                  <div className="mt-4 flex flex-wrap gap-4 justify-center">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                      <span className="text-sm">직접 영향국</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-orange-500 mr-2"></div>
                      <span className="text-sm">지역 영향국</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm">국제 관여국</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Country Impact Chart */}
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">국가별 영향도 분석</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={countryImpactData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="country" 
                      tick={{ fontSize: 12 }}
                      interval={0}
                      angle={-45}
                      textAnchor="end"
                      height={60}
                    />
                    <YAxis />
                    <Tooltip 
                      content={({ active, payload }) => {
                        if (active && payload && payload[0]) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-white p-3 border rounded shadow-lg max-w-xs">
                              <p className="font-semibold">{data.flag} {data.country}</p>
                              <p className="text-sm text-gray-600">영향도: {data.impact}%</p>
                              <p className="text-xs text-gray-500 mt-1">{data.details}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="impact" fill="#8884d8">
                      {countryImpactData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={
                            entry.type === 'direct' ? '#FF4444' :
                            entry.type === 'regional' ? '#FF8800' : '#4488FF'
                          } 
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Country Categories */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                  <h4 className="font-bold text-red-800 mb-2">🔴 직접 영향국</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">🇮🇳 인도</span>
                      <span className="text-xs text-red-600">영토 분쟁 당사국</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">🇵🇰 파키스탄</span>
                      <span className="text-xs text-red-600">영토 분쟁 당사국</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">🇨🇳 중국</span>
                      <span className="text-xs text-red-600">Aksai Chin 점유</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
                  <h4 className="font-bold text-orange-800 mb-2">🟡 지역 영향국</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">🇦🇫 아프가니스탄</span>
                      <span className="text-xs text-orange-600">국경 불안정</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">🇧🇩 방글라데시</span>
                      <span className="text-xs text-orange-600">난민 유입</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">🇳🇵 네팔</span>
                      <span className="text-xs text-orange-600">2025년 희생자</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                  <h4 className="font-bold text-blue-800 mb-2">🔵 국제 관여국</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">🇺🇸 미국</span>
                      <span className="text-xs text-blue-600">중재 역할</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">🇷🇺 러시아</span>
                      <span className="text-xs text-blue-600">무기 공급국</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">🇬🇧 영국</span>
                      <span className="text-xs text-blue-600">역사적 책임</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Country Details Popup */}
        {selectedCountry && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center">
                    <span className="text-2xl mr-2">{selectedCountry.flag}</span>
                    {selectedCountry.country}
                  </h3>
                  <button 
                    onClick={() => setSelectedCountry(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700">영향 유형:</p>
                    <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                      selectedCountry.type === 'direct' ? 'bg-red-100 text-red-800' :
                      selectedCountry.type === 'regional' ? 'bg-orange-100 text-orange-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {selectedCountry.type === 'direct' ? '직접 영향' :
                       selectedCountry.type === 'regional' ? '지역 영향' : '국제 관여'}
                    </span>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700">영향도:</p>
                    <div className="flex items-center mt-1">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            selectedCountry.type === 'direct' ? 'bg-red-500' :
                            selectedCountry.type === 'regional' ? 'bg-orange-500' : 'bg-blue-500'
                          }`}
                          style={{ width: `${selectedCountry.impact}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-sm font-medium">{selectedCountry.impact}%</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">상세 내용:</p>
                    <p className="text-sm text-gray-600">{selectedCountry.details}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mt-6">
          <h3 className="text-lg font-semibold mb-3">데이터 출처 요약</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div>
              <p className="font-medium">주요 언론사:</p>
              <ul className="mt-2 space-y-1">
                <li>• Wikipedia, Al Jazeera</li>
                <li>• ABC News, Washington Post</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">연구기관:</p>
              <ul className="mt-2 space-y-1">
                <li>• Stimson Center</li>
                <li>• CSIS, House of Commons</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">업데이트:</p>
              <ul className="mt-2 space-y-1">
                <li>• 2025년 9월 기준</li>
                <li>• 실시간 언론 보도 반영</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KashmirConflictDashboard;