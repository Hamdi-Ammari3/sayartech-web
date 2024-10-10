import React,{useState,useEffect} from 'react'
import { PiCurrencyDollarLight } from "react-icons/pi"
import { TfiStatsUp } from "react-icons/tfi"
import { PiStudentLight } from "react-icons/pi";
import { PiVanLight } from "react-icons/pi"
import { LuSchool2 } from "react-icons/lu";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import '../app/style.css'

const Main = () => {

  return (
    <div className='main-section-container'>
        <div className='main_section_stat'>
          <div className='main_section_stat_header_div'>
            <h4>المستخدمين</h4>
          </div>
          <div className='main_section_stat_items'>
            <div className='main_section_stat_item'>
              <div className='main_section_stat_item_icon_div' style={{backgroundColor:'#955BFE'}}>
                <PiStudentLight className='main_section_stat_item_icon'/>
              </div>
              <div className='main_section_stat_info_item'>
                <p>طالب</p>
                <h5>1000</h5>
              </div>
            </div>

            <div className='main_section_stat_item'>
              <div className='main_section_stat_item_icon_div'  style={{backgroundColor:'#16B1FF'}}>
                <PiVanLight className='main_section_stat_item_icon'/>
              </div>
              <div className='main_section_stat_info_item'>
                <p>سائق</p>
                <h5>100</h5>
              </div>
            </div>

          </div>
        </div>
        <div  className='main_section_revenue'>

          <div className='main_section_monthly_revenue'>
            <div className='main_section_monthly_revenue_icon_div' style={{backgroundColor:'#56CA00'}}>
              <TfiStatsUp className='main_section_monthly_revenue_icon' style={{fontSize:'30px'}} />
            </div>
            <div className='main_section_monthly_revenue_div'>
              <p>مجموع الاشتراكات الشهرية</p>
              <div className='main_section_monthly_revenue_div2'>
                <h4>--</h4>
                <h4>دينار</h4>
              </div>
            </div>
          </div>

          <div className='main_section_monthly_revenue'>
            <div className='main_section_monthly_revenue_icon_div' style={{backgroundColor:'#955BFE'}}>
              <PiCurrencyDollarLight className='main_section_monthly_revenue_icon' style={{fontSize:'35px'}}/>
            </div>
            <div className='main_section_monthly_revenue_div'>
              <p>حصة المدرسة</p>
              <div className='main_section_monthly_revenue_div2'>
                <h4>--</h4>
                <h4>دينار</h4>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Main
