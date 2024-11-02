'use client'

import clsx from 'clsx'
import { animate, scroll, timeline } from 'motion'
import { useEffect, useState } from 'react'
import s from './page.module.scss'

export default function Home() {
  const [ready, setReady] = useState(false)
  const [fontSize, setFontSize] = useState(27)
  const [fontWeight, setFontWeight] = useState(600)
  const [lineHeight, setLineHeight] = useState(1.4)
  const [letterSpacing, setLetterSpacing] = useState(-0.01)

  useEffect(() => {
    const documentFonts = document.fonts

    function ready() {
      setReady(true)

      timeline([
        [
          `.${s.englishTitle}`,
          {
            scale: [1.4, 1],
            color: ['#3DFD95', '#FFE501', '#FF0000', '#6349FF'],
          },
          {
            delay: 0.2,
            duration: 1,
          },
        ],
        [
          `.${s.englishTitle}`,
          {
            y: ['0', '-1.82em'],
            scale: [1, 0.4],
            color: 'inherit',
          },
          { duration: 0.8, easing: [0.83, 0, 0.17, 1] },
        ],
        [
          `.${s.hangulTitle}`,
          {
            opacity: [0, 1],
            y: ['0.5em', '-1em'],
            color: ['transparent', 'inherit'],
          },
          { at: '-0.5', duration: 0.5 },
        ],
        [
          `.${s.subtitle}`,
          {
            opacity: 1,
            y: ['1em', '0'],
          },
          { at: '-0.3', duration: 0.5 },
        ],
        [
          `.${s.downloadButton}`,
          {
            opacity: 1,
            y: ['0.5em', '0'],
          },
          { at: '-0.3', duration: 0.5 },
        ],
        [
          `.${s.heroContent}`,
          {
            scale: [1.1, 1],
            boxShadow: [
              '-64px -64px 64px -64px rgba(var(--green-rgb), 0.8), 64px 64px 64px -64px rgba(var(--yellow-rgb), 0.8), 64px -64px 64px -64px rgba(var(--red-rgb), 0.8), -64px 64px 64px -64px rgba(var(--purple-rgb), 0.8), -16px -16px 16px -16px rgba(var(--green-rgb), 0.5), 16px 16px 16px -16px rgba(var(--yellow-rgb), 0.5), 16px -16px 16px -16px rgba(var(--red-rgb), 0.5), -16px 16px 16px -16px rgba(var(--purple-rgb), 0.5)',
            ],
          },
          {
            at: '-1',
            duration: 1,
          },
        ],
      ])

      const hero = document.querySelector(`.${s.hero}`)!

      scroll(
        animate(`.${s.hero}`, {
          opacity: [1, 0.2],
          filter: ['blur(0)', 'blur(2px)'],
        }),
        {
          target: hero,
          offset: ['end end', 'end center'],
        }
      )
      scroll(
        animate(`.${s.title}`, {
          y: ['1em', '-1em'],
        }),
        {
          target: hero,
          offset: ['end end', 'end center'],
        }
      )
      scroll(
        animate(`.${s.subtitleWrapper}`, {
          y: ['0', '-4.5em'],
        }),
        {
          target: hero,
          offset: ['end end', 'end center'],
        }
      )
      scroll(
        animate(`.${s.downloadButtonsContainer}`, {
          y: ['0', '-3em'],
        }),
        {
          target: hero,
          offset: ['end end', 'end center'],
        }
      )
    }

    if (documentFonts) {
      documentFonts.ready.then(() => {
        console.log('Fonts are ready')
        ready()
      })
    } else {
      ready()
    }
  }, [])

  return (
    <div>
      <div
        className={clsx(s.interopPage, {
          [s.ready]: ready,
        })}
      >
        <div className={clsx(s.section, s.hero)}>
          <div className={s.heroContent}>
            <div className={s.heroContentShift}>
              <h1 className={s.title}>
                <span className={s.englishTitleWrapper}>
                  <span className={s.englishTitle}>Interop</span>
                </span>
                <span className={s.hangulTitle}>
                  인터롭
                  <span
                    aria-hidden="true"
                    className={clsx(s.hangulTitleEffect, s.green)}
                  >
                    인터롭
                  </span>
                  <span
                    aria-hidden="true"
                    className={clsx(s.hangulTitleEffect, s.yellow)}
                  >
                    인터롭
                  </span>
                  <span
                    aria-hidden="true"
                    className={clsx(s.hangulTitleEffect, s.red)}
                  >
                    인터롭
                  </span>
                  <span
                    aria-hidden="true"
                    className={clsx(s.hangulTitleEffect, s.purple)}
                  >
                    인터롭
                  </span>
                </span>
              </h1>
              <div className={s.subtitleWrapper}>
                <p className={s.subtitle}>
                  세상에서 가장 조화로운
                  <br />
                  한글 alphabet 고딕체
                </p>
              </div>
              <div className={s.downloadButtonsContainer}>
                <a
                  className={clsx(s.button, s.downloadButton, s.otf)}
                  href="/Interop_1.7_otf.zip"
                >
                  OTF 다운로드
                </a>
                <a
                  className={clsx(s.button, s.downloadButton, s.woff)}
                  href="/Interop_1.7_woff.zip"
                >
                  WOFF 다운로드
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={clsx(s.introduction)}>
          <p>
            Interop은 Inter font family에 Noto Sans의 한글 glyphs를 조합한
            글꼴입니다. 한글과 alphabet이 마치 하나의 언어처럼 보이게 만들기
            위해 본고딕의 크기를 줄이고 굵기를 정교하게 조절했습니다. 2019년에
            대학 과제에 사용하고자 처음 제작했으며 리브랜딩을 거쳐 퍼블릭에
            공개했습니다. 단언컨대 Interop은 두 언어의 활자가 세상에서 가장
            아름답게 균형과 조화를 이루는 오픈소스 고딕체입니다.
          </p>
        </div>

        <div className={s.weights}>
          <span className={s.thin}>씬 Thin</span>
          <span className={s.extraLight}>엑스트라라이트 ExtraLight</span>
          <span className={s.light}>라이트 Light</span>
          <span className={s.regular}>레귤러 Regular</span>
          <span className={s.medium}>미디엄 Medium</span>
          <span className={s.semiBold}>세미볼드 SemiBold</span>
          <span className={s.bold}>볼드 Bold</span>
          <span className={s.extraBold}>엑스트라볼드 ExtraBold</span>
        </div>

        <div className={clsx(s.playground)}>
          <div className={s.controllers}>
            <div className={s.controller}>
              <label htmlFor="size">크기</label>
              <input
                className={s.size}
                type="range"
                min="14"
                max="100"
                id="size"
                step="0.1"
                value={fontSize}
                onChange={(e) => {
                  setFontSize(Number(e.target.value))
                }}
              />
            </div>
            <div className={s.controller}>
              <label htmlFor="weight">굵기</label>
              <input
                className={s.weight}
                type="range"
                min="100"
                max="800"
                step="100"
                id="weight"
                value={fontWeight}
                onChange={(e) => {
                  setFontWeight(Number(e.target.value))
                }}
              />
            </div>
            <div className={s.controller}>
              <label htmlFor="line-height">줄 간격</label>
              <input
                className={s.lineHeight}
                type="range"
                min="1"
                max="2"
                step="0.01"
                id="line-height"
                value={lineHeight}
                onChange={(e) => {
                  setLineHeight(Number(e.target.value))
                }}
              />
            </div>
            <div className={s.controller}>
              <label htmlFor="letter-spacing">자간</label>
              <input
                className={s.letterSpacing}
                type="range"
                min="-0.08"
                max="0.2"
                step="0.005"
                id="letter-spacing"
                value={letterSpacing}
                onChange={(e) => {
                  setLetterSpacing(Number(e.target.value))
                }}
              />
            </div>
          </div>
          <textarea
            className={s.textarea}
            autoComplete="off"
            spellCheck="false"
            defaultValue="오늘은 team meeting이 있는 날이라서, 모두가 project 진행 상황을 공유하고 feedback을 주고받을 예정입니다. Minimalism is an art that requires maximum artistry, experience, and precision."
            name=""
            id=""
            style={{
              fontSize: `${fontSize}px`,
              fontWeight,
              lineHeight,
              letterSpacing: `${letterSpacing}em`,
            }}
          />
        </div>

        <div className={clsx(s.github)}>
          <a
            href="https://github.com/jhaemin/Interop"
            target="_blank"
            className={clsx(s.button, s.sourceCode)}
          >
            GitHub 소스코드
          </a>
        </div>
      </div>

      <footer className={s.footer}>
        <span className={s.content}>
          <span className={s.intro}>Designed and developed by </span>
          <a
            href="https://www.jhaemin.com"
            target="_blank"
            className={s.credit}
          >
            Jang Haemin
          </a>
        </span>
      </footer>
    </div>
  )
}
