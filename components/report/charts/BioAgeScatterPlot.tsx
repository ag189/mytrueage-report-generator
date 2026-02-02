'use client';

import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Legend, Customized, LabelList } from 'recharts';

interface BioAgeScatterPlotProps {
  chronologicalAge: number;
  biologicalAge: number;
}

export default function BioAgeScatterPlot({ chronologicalAge, biologicalAge }: BioAgeScatterPlotProps) {
  // Generate population reference data
  const populationData = React.useMemo(() => {
    const data = [];
    for (let i = 0; i < 1500; i++) {
      const chronoAge = Math.random() * 60 + 20;
      const variance = (Math.random() - 0.5) * 15;
      const bioAge = chronoAge + variance;
      data.push({ chronoAge, bioAge });
    }
    return data;
  }, []);

  const axisTicks = React.useMemo(() => {
    const ticks = [];
    for (let value = 20; value <= 80; value += 5) {
      ticks.push(value);
    }
    return ticks;
  }, []);

  // User's data point
  const userData = [{ chronoAge: chronologicalAge, bioAge: biologicalAge, label: 'YOU' }];

  return (
    <div style={{ width: '100%', maxWidth: '460px', margin: '0 auto' }}>
      <ResponsiveContainer width="100%" aspect={1} minWidth={300}>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 44, left: 52 }}>
          <Customized
            component={({ xAxisMap, yAxisMap }) => {
              if (!xAxisMap || !yAxisMap) return null;
              const xAxis = Object.values(xAxisMap)[0];
              const yAxis = Object.values(yAxisMap)[0];
              if (!xAxis || !yAxis || !xAxis.scale || !yAxis.scale) return null;

              const xScale = xAxis.scale;
              const yScale = yAxis.scale;
              const x20 = xScale(20);
              const x80 = xScale(80);
              const y20 = yScale(20);
              const y80 = yScale(80);

              return (
                <g>
                  <polygon
                    points={`${x20},${y80} ${x80},${y80} ${x20},${y20}`}
                    fill="#6b2d3c"
                    opacity={0.06}
                  />
                  <polygon
                    points={`${x20},${y20} ${x80},${y20} ${x80},${y80}`}
                    fill="#2d5a47"
                    opacity={0.06}
                  />
                  <text
                    x={x20 + 12}
                    y={y80 + 18}
                    fill="#6b2d3c"
                    fontSize="8"
                    fontFamily="'Inter', sans-serif"
                    textTransform="uppercase"
                    letterSpacing="0.08em"
                  >
                    Faster aging (B &gt; C)
                  </text>
                  <text
                    x={x80 - 120}
                    y={y20 - 10}
                    fill="#2d5a47"
                    fontSize="8"
                    fontFamily="'Inter', sans-serif"
                    textTransform="uppercase"
                    letterSpacing="0.08em"
                  >
                    Slower aging (B &lt; C)
                  </text>
                </g>
              );
            }}
          />
          <CartesianGrid 
            strokeDasharray="none" 
            stroke="#e0e0de" 
            strokeWidth={0.5}
          />
          <XAxis 
            type="number" 
            dataKey="chronoAge" 
            name="Chronological Age" 
            domain={[20, 80]}
            ticks={axisTicks}
            tick={{ 
              fontFamily: "'Inter', sans-serif", 
              fontSize: 9, 
              fill: '#6b6b6b' 
            }}
            label={{ 
              value: 'Chronological Age (years)', 
              position: 'bottom', 
              offset: 32,
              style: { 
                fontFamily: "'Inter', sans-serif", 
                fontSize: 9, 
                fill: '#6b6b6b',
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
              }
            }}
            stroke="#3d3d3d"
            strokeWidth={1}
          />
          <YAxis 
            type="number" 
            dataKey="bioAge" 
            name="Biological Age" 
            domain={[20, 80]}
            ticks={axisTicks}
            tick={{ 
              fontFamily: "'Inter', sans-serif", 
              fontSize: 9, 
              fill: '#6b6b6b' 
            }}
            label={{ 
              value: 'Biological Age (years)', 
              angle: -90, 
              position: 'insideLeft', 
              offset: 8,
              style: { 
                fontFamily: "'Inter', sans-serif", 
                fontSize: 9, 
                fill: '#6b6b6b',
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
              }
            }}
            stroke="#3d3d3d"
            strokeWidth={1}
          />
          <Tooltip 
            cursor={{ strokeDasharray: '3 3', stroke: '#6b6b6b' }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div style={{
                    background: '#ffffff',
                    padding: '12px 16px',
                    border: '1px solid #e0e0de',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    <p style={{ fontSize: '9pt', color: '#6b6b6b', margin: '0 0 4px 0' }}>
                      Chronological: {Number(payload[0].value).toFixed(1)} years
                    </p>
                    <p style={{ fontSize: '9pt', color: '#6b6b6b', margin: 0 }}>
                      Biological: {Number(payload[1].value).toFixed(1)} years
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          
          {/* Baseline diagonal line */}
          <ReferenceLine 
            stroke="#0a0a0a" 
            strokeWidth={1}
            strokeDasharray="4 4"
            segment={[{ x: 20, y: 20 }, { x: 80, y: 80 }]}
          />

          {/* Population reference data */}
          <Scatter 
            name="Population" 
            data={populationData} 
            fill="#1e3a5f" 
            fillOpacity={0.12}
            shape="circle"
          />

          {/* User's data point */}
          <Scatter 
            name="Your Result" 
            data={userData} 
            fill="#b3261e"
            shape="diamond"
          >
            <LabelList 
              dataKey="label" 
              position="top" 
              fill="#b3261e" 
              fontSize={9} 
              fontFamily="'Inter', sans-serif" 
              formatter={(value: string) => value}
            />
          </Scatter>

          <Legend 
            verticalAlign="top" 
            height={36}
            iconType="square"
            wrapperStyle={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '9pt',
              color: '#6b6b6b'
            }}
          />
        </ScatterChart>
      </ResponsiveContainer>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        marginTop: '16px',
        paddingLeft: '56px',
        paddingRight: '24px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ 
            width: '10px', 
            height: '10px', 
            background: '#1e3a5f', 
            opacity: 0.3 
          }}></div>
          <span style={{ 
            fontFamily: "'Inter', sans-serif", 
            fontSize: '8pt', 
            color: '#6b6b6b',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>Population Reference</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ 
            width: '10px', 
            height: '10px', 
            background: '#b3261e',
            transform: 'rotate(45deg)'
          }}></div>
          <span style={{ 
            fontFamily: "'Inter', sans-serif", 
            fontSize: '8pt', 
            color: '#6b6b6b',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>Your Result</span>
        </div>
      </div>
    </div>
  );
}
