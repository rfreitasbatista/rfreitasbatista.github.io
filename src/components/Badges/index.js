import React from 'react';
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript,
  DiPhp,
  DiJqueryLogo,
  DiReact,
  DiGithubBadge,
} from 'react-icons/di';
import { FaFontAwesome } from 'react-icons/fa';
import { AiOutlineLineChart, AiOutlineBarChart } from 'react-icons/ai';

function Badges(props) {
  const { id, features } = props
  const { html, css, javascript, bootstrap, jquery, php, fontawesome, appexchartbar, appexchartline, reactjs, github } = features
  return (<div className="features d-flex justify-content-center" selected={id}>
            {html && (
              <DiHtml5 
                size={30} 
                color={'rgb(224, 80, 27)'} 
                selected={id}
              />
            )}
            {css && (
              <DiCss3 
                size={30} 
                color={'rgb(0, 111, 189)'} 
                selected={id} 
              />
            )}
            {javascript && (
              <DiJavascript
                size={30}
                color={'rgb(214, 162, 34)'}
                selected={id}
              />
            )}
            {bootstrap && (
              <DiBootstrap
                size={30}
                color={'rgb(121, 82, 179)'}
                selected={id}
              />
            )}
            {jquery && (
              <DiJqueryLogo
                size={30}
                color={'rgb(6, 110, 171)'}
                selected={id}
              />
            )}
            {php && (
              <DiPhp 
                size={30} 
                color={'rgb(116, 130, 193)'} 
                selected={id} 
              />
            )}
            {fontawesome && (
              <FaFontAwesome
                size={30}
                color={'rgb(53, 130, 216)'}
                selected={id}
              />
            )}
            {appexchartbar && (
              <AiOutlineBarChart
                size={30}
                color={'rgb(0, 0, 0)'}
                selected={id}
              />
            )}
            {appexchartline && (
              <AiOutlineLineChart
                size={30}
                color={'rgb(0, 0, 0)'}
                selected={id}
              />
            )}
            {reactjs && (
              <DiReact 
                size={30} 
                color={'rgb(97, 218, 251)'} 
                selected={id} />
            )}
            {github && (
              <DiGithubBadge 
                size={30} 
                color={'rgb(0, 0, 0)'} 
                selected={id} 
              />
            )}
          </div>)
}

export default Badges;
