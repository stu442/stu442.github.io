"use strict";(self.webpackChunkgjg_blog=self.webpackChunkgjg_blog||[]).push([[616],{2117:function(e,n,l){l.r(n),l.d(n,{Head:function(){return m.p},default:function(){return s}});var t=l(6540),a=l(8453);function c(e){const n=Object.assign({p:"p",a:"a",h2:"h2",blockquote:"blockquote",ol:"ol",li:"li",strong:"strong",code:"code",em:"em",pre:"pre",h3:"h3",span:"span",h4:"h4",del:"del"},(0,a.RP)(),e.components);return t.createElement(t.Fragment,null,t.createElement(n.p,null,"1편을 안보고 오셨다면 이전 글을 읽고 오시는걸 추천드립니다.\n",t.createElement(n.a,{href:"https://stu442.github.io/%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EB%B0%9C%EB%A7%8C-%EB%8B%B4%EA%B0%80%EB%B3%B4%EA%B8%B0-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B3%84%EC%82%B0-%EC%95%A1%EC%85%98/"},"함수형 프로그래밍 발만 담가보기 (1) - '데이터, 계산, 액션'")),"\n",t.createElement(n.h2,null,"다시, 함수형 프로그래밍이란?"),"\n",t.createElement(n.p,null,"저번 글에서, 함수형 프로그래밍은"),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.ol,null,"\n",t.createElement(n.li,null,"자료 처리를 계산으로 취급하고"),"\n",t.createElement(n.li,null,"가변 데이터를 멀리하는"),"\n",t.createElement(n.li,null,"프로그래밍 패러다임의 하나이다."),"\n"),"\n"),"\n",t.createElement(n.p,null,"라고, 이야기했습니다."),"\n",t.createElement(n.p,null,"이번 글에서는 '가변 데이터'를 멀리하는 게 도대체 무엇이고, 왜 그러는 것인지 알아보겠습니다."),"\n",t.createElement(n.h2,null,"데이터 불변성을 유지하자."),"\n",t.createElement(n.p,null,'"가변 데이터를 멀리하자!"는 결국 "데이터가 \'',t.createElement(n.strong,null,"불변"),"'해야 한다\"를 의미합니다.\n데이터가 변하지 않는 것은 코드의 복잡성을 줄이고, 예측 가능성을 높여줍니다."),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"계산"),"은 언제 어떻게 실행하든 함수 외부에 영향을 주지 않습니다.\n같은 입력에 항상 같은 출력을 반환합니다.\n이런 계산의 특징은 마찬가지로 부수효과를 줄여 코드의 복잡성을 줄이고, 예측 가능성을 높여줍니다."),"\n",t.createElement(n.p,null,"그러나 ",t.createElement(n.em,null,"만약 데이터가 변한다면 그 함수는 더 이상 ",t.createElement(n.code,null,"계산"),"이 아니고, 부수효과를 일으키는 ",t.createElement(n.code,null,"액션"),"이 됩니다.")),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"var a = 1;\n\nfunction add() {\n\ta++\n\tconsole.log(a)\n}\n\nadd(); // 출력: 2\nadd(); // 출력: 3\nadd(); // 출력: 4\nadd(); // 출력: 5\nadd(); // 출력: 6\nadd(); // 출력: 7\nadd(); // 출력: 8\nadd(); // 출력: 9\nadd(); // 출력: 10\n\n")),"\n",t.createElement(n.p,null,"(위 코드는 함수를 호출할 때마다 데이터가 변하니 ",t.createElement(n.code,null,"액션"),"이네요!!)"),"\n",t.createElement(n.p,null,"그렇기에 우리는 ",t.createElement(n.code,null,"데이터 불변성"),"을 지켜야 하는 것입니다."),"\n",t.createElement(n.p,null,"이 책에서는 데이터 불변성을 지키기 위한 방법으로 2가지 개념을 소개합니다."),"\n",t.createElement(n.ol,null,"\n",t.createElement(n.li,null,"카피 온 라이트 (Copy on Write)"),"\n",t.createElement(n.li,null,"방어적 복사"),"\n"),"\n",t.createElement(n.h3,null,"카피 온 라이트(Copy on Write)"),"\n",t.createElement(n.p,null,"카피 온 라이트는 데이터를 조작하기 전에, 원본을 직접 수정하지 않고 ",t.createElement(n.code,null,"복사본"),"을 만들고 조작하는 것을 의미합니다."),"\n",t.createElement(n.p,null,"예를 통해 좀 더 쉽게 알 수 있습니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"const array = [0]\n\nfunction increase(arr) {\n  const temp = arr[arr.length - 1];\n  arr.push(temp + 1);\n  return arr\n}\n\nconsole.log(increase(array))\n// 출력 : [0, 1]\nconsole.log(increase(array))\n// 출력 : [0, 1, 2]\nconsole.log(increase(array))\n// 출력 : [0, 1, 2, 3]\nconsole.log(increase(array))\n// 출력 : [0, 1, 2, 3, 4]\nconsole.log(array)\n// 출력 : [0, 1, 2, 3, 4]\n// 원본 배열값이 바뀐다.\n")),"\n",t.createElement(n.p,null,"위 ",t.createElement(n.code,null,"increase")," 함수는 실행할 때마다 원본 배열을 바꾸게 됩니다.\n이는 외부 세계에 영향을 끼치는 행위이기에 ",t.createElement(n.code,null,"액션"),"이 됩니다."),"\n",t.createElement(n.p,null,"액션은 멀리하는 게 좋을 것 같은데... 어떻게 바꿔야 할까요??"),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"function increaseFn(arr) {\n  const newArr = arr.slice();\n  const temp = arr[arr.length - 1];\n  newArr.push(temp + 1)\n  return newArr\n}\n\nconsole.log(increaseFn(array));\n// 출력 : [0, 1]\nconsole.log(increaseFn(array));\n// 출력 : [0, 1]\nconsole.log(increaseFn(array));\n// 출력 : [0, 1]\nconsole.log(array);\n// 출력 : [0]\n// 원본 배열의 값은 바뀌지 않는다.\n")),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"increaseFn")," 함수는 같은 동작을 수행합니다. 그렇지만 원본 배열의 값은 몇 번을 실행해도 바뀌지 않습니다. 즉, 외부 세계에 영향을 주지 않습니다.\n이 함수는 ",t.createElement(n.code,null,"계산"),"입니다."),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"increase")," 함수에서 arr 값을 ",t.createElement(n.em,null,"복사하는 로직"),"만 추가했을 뿐인데, ",t.createElement(n.code,null,"계산"),"이 되었습니다."),"\n",t.createElement(n.p,null,'이것이 "카피 온 라이트"입니다.'),"\n",t.createElement(n.p,null,"그림으로 간단하게 표현해 봤습니다."),"\n",t.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 41.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA90lEQVR42oVR23KFIAzk/7+zetSqyDWJgKcLafvQl+6MTIDdZFnN+1+09hA17x/mPzcm5xxjLKXcgEgFWhtLUwZqHyOndIcASq1K6TAhBBFxzm3b5p2j42Cs3hORitEdNb59Wex5Qq+TUkp9MhgqBklyrjHCKjM/z6NiFNiu2/Z5WrgDcI7VQIA73cMJDPUao46jjr6YAEIiuvJtU0lcYEUlhkcM13VZa1FzzrD9ZqYYWym/k4np47VM88IsKfWm4H6Lwdj3HcclhMrcRmO1DYLGg0Scu7Tu7YjMeIIgiWmaXvOM/Ho+RIj05081bQ0sA+u64i0i8gWGedEawlhqRwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="참고용 그림"\n        title=""\n        src="/static/573888f6f3927ec405e6cb1185e15bdd/7d769/Pastedimage20240516151901.png"\n        srcset="/static/573888f6f3927ec405e6cb1185e15bdd/5243c/Pastedimage20240516151901.png 240w,\n/static/573888f6f3927ec405e6cb1185e15bdd/ab158/Pastedimage20240516151901.png 480w,\n/static/573888f6f3927ec405e6cb1185e15bdd/7d769/Pastedimage20240516151901.png 960w,\n/static/573888f6f3927ec405e6cb1185e15bdd/87339/Pastedimage20240516151901.png 1440w,\n/static/573888f6f3927ec405e6cb1185e15bdd/88b03/Pastedimage20240516151901.png 1920w,\n/static/573888f6f3927ec405e6cb1185e15bdd/8a9f9/Pastedimage20240516151901.png 3218w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",t.createElement(n.h3,null,"방어적 복사"),"\n",t.createElement(n.p,null,'카피 온 라이트는 "',t.createElement(n.em,null,"우리가 수정할 수 있는 코드 안"),'"에서 데이터를 주고받습니다.\n하지만, 방어적 복사는 "',t.createElement(n.em,null,"신뢰할 수 없는 코드"),'"와 "',t.createElement(n.em,null,"데이터"),'"를 주고받을 때 ',t.createElement(n.strong,null,"복사본"),"을 만들어 전달하는 방식을 말합니다."),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"카피 온 라이트"),"와 ",t.createElement(n.code,null,"방어적 복사"),"는 그 개념이 매우 비슷하지만, 굉장히 다른 기술입니다."),"\n",t.createElement(n.h4,null,"안전지대"),"\n",t.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 935px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 71.66666666666667%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAAsTAAALEwEAmpwYAAACBElEQVR42k2SyW/TQBSH/f8fcwAOKAsSJKceOKAiIUCVioRIm0WJm9TEsT3eZnUbO41jMh7eeLJU+ulp5ul9b5uxtnmeIJSGIfI8tF6Hnhe4LkkShjGIEyJAlGaUPjH2zPlGiDzLQC95buVxrDivKVWMgWoQ55JSyRgI/FrGbwRXQhSlO4ytjYHhjjEclI7WPFiTTp3yXgQeSktKrWeEjjBgmEBuxSGCgq2bIGXygj1hJp2GsyDQcNMPMIc0wavg7zIgbiBxorMAeVZTw9QvGbOE5ykhaqJLiQB9HqLOaPthfmiPii/DoEChbkG3wy+Vm6uGOcBZBikPOL0aJm/uivb9pj3edsfF2/uX6wnZ+Z5wnNS2K9uWjgORuscjvF4rkSnBVsugM6v6j6r/IAez6tOi7oyK1k/068etP/zjj8cyDOso0p03858qA8zpdBl354ePS9X7zQc34bubqPXdbd0S2/YUJ9K0bchm8mZm34eZAXadsDv/1wd4VvUWsjctB4+qNy/jVQhrk+eFnSsftw0wY1UcXd2l7QelO18oIN/b6usU12l8YV4tXFe+vDPnwguuJ7g72fVsGDj/Nkm2Uay3fYZPPYP2UDmHHcBT6ZG4PlDC/dh3kPAjSVKVCf1IZmCj5hce236K4wrjPSF7jEuw+ldTSTFYOGvPa0FkoypNC0L+A/cB/PurrKVjAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="참고용 그림1"\n        title=""\n        src="/static/53f3988c01f1980df66c0eb1f3a0e803/724ba/Pastedimage20240512104618.png"\n        srcset="/static/53f3988c01f1980df66c0eb1f3a0e803/5243c/Pastedimage20240512104618.png 240w,\n/static/53f3988c01f1980df66c0eb1f3a0e803/ab158/Pastedimage20240512104618.png 480w,\n/static/53f3988c01f1980df66c0eb1f3a0e803/724ba/Pastedimage20240512104618.png 935w"\n        sizes="(max-width: 935px) 100vw, 935px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"카피 온 라이트"),"는 안전지대 안에서 사용합니다.\n",t.createElement(n.code,null,"방어적 복사"),"는 안전지대 밖에 접근할 때 사용합니다."),"\n",t.createElement(n.p,null,'"접근"에 대한 개념은 방어적 복사를 사용하는 "두 가지 상황"에서 더 설명할 예정이니, 우선 안전지대에 대한 개념만 설명하겠습니다.'),"\n",t.createElement(n.p,null,"안전지대는 통제할 수 있는 영역입니다.\n제가 코드를 직접 수정할 수 있죠."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"function increaseFn(arr) {\n  const newArr = arr.slice();\n  const temp = arr[arr.length - 1];\n  newArr.push(temp + 1)\n  return newArr\n}\n")),"\n",t.createElement(n.p,null,"예를 들어 이 코드는 안전지대입니다.\n확실하게 통제 가능하고, 변경할 수 있는 코드입니다."),"\n",t.createElement(n.p,null,"그렇지만 당장 고칠 수 없는 '",t.createElement(n.em,null,"레거시 코드"),"' 라던가 ",t.createElement(n.em,null,"라이브러리의 특정 함수"),"를 사용한다면 통제가 불가능한 안전 지대 밖, '위험지대' 인 거죠."),"\n",t.createElement(n.h4,null,"깊은 복사"),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"카피 온 라이트"),"는 ",t.createElement(n.em,null,"얕은 복사"),"를 사용합니다.\n",t.createElement(n.code,null,"방어적 복사"),"는 ",t.createElement(n.em,null,"깊은 복사"),"를 사용합니다."),"\n",t.createElement(n.p,null,"깊은 복사는 얕은 복사보다 상대적으로 많은 리소스를 요구하는 작업으로 신중히 써야 합니다."),"\n",t.createElement(n.p,null,"이제 '방어적 복사를 사용해야 하는 두 가지 상황'에 대해 알아보겠습니다.\n앞으로 이 두 가지 상황이 아니면 되도록 방어적 복사는 사용하지 않습니다."),"\n",t.createElement(n.h4,null,"두 가지 상황"),"\n",t.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 935px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 71.66666666666667%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAAsTAAALEwEAmpwYAAACCklEQVR42k2SXW/aMBSG+f8Xu6i03UwtVBp0N9vuui9N2sWmahLQdGIwYOTTcezYxwFCSwYk3nGcZpVeWfY5fnzs16dzv93SMEyiKPS8COX7geumlErGJOeASlMlRCbEWsoNwBYgzzLUQ553cko1QCWElrKqZZdmjqOVTbXBNNVCPDDW2VoY1ygAbXdbXkhcNsJDW9WRQojOJooauD7SAHgECK3q66AwxbmuN7QkTgycBYGB8T6YluKYxNyNIjcRbnhiFCMVkpzbsTkCBVBI2VG+r5UyJMh1RK7HtHu7e+nse87u45jck9hUe3zR//oWBoSzDKMlZ++G8fNhfj7a9MZ519m9GO6uR6SIgiKO1XJ5WCxKz8OdppJSNYxrlWkl3UXYnRyu5rr/u+rP9atZeT7cPPu0vPn6ndyOA8c5eF4Vhtpai29uKiMM4m5Oe79Og7keTP6+uUkvfqizL6uzb3w69bXglYTGLQuj2+bNaJhSCK+WpDs5Xi10f1YOJof+9PT6j76c7OMVwWzJHg1rKxu38SYIS3mg8dsRu5hpLI7XHiz0+VR/uEsr9LxlnvyZqbxu/1kB+MF7h/d+FpfTEj3/7CQ7gi0kqxZuDbdNYtoTv8o0BuhMlSIVfuwuI/BJmTKMaJsCaNrL/pmtrAgpkmTP2D5JsF33nB9TfuIMR5ybyFPhTitKc8b+ARDr/Lr7vxXgAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="참고용 그림"\n        title=""\n        src="/static/60074c4d92a9b907c39074d80ecef96f/724ba/Pastedimage20240512104847.png"\n        srcset="/static/60074c4d92a9b907c39074d80ecef96f/5243c/Pastedimage20240512104847.png 240w,\n/static/60074c4d92a9b907c39074d80ecef96f/ab158/Pastedimage20240512104847.png 480w,\n/static/60074c4d92a9b907c39074d80ecef96f/724ba/Pastedimage20240512104847.png 935w"\n        sizes="(max-width: 935px) 100vw, 935px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",t.createElement(n.ol,null,"\n",t.createElement(n.li,null,"데이터가 안전지대에 들어올 때"),"\n",t.createElement(n.li,null,"데이터가 안전지대에서 나갈 때"),"\n"),"\n",t.createElement(n.p,null,"이 두 가지 상황이 아니라면 ",t.createElement(n.code,null,"방어적 복사"),"의 사용을 지양해야 합니다."),"\n",t.createElement(n.h4,null,"방어적 복사를 사용해 보자."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"// 당장 고칠 수 없는 유틸 함수 (액션)\nimport someUtil from '/utils'\n\nconst obj = {\n\t// 대충 데이터\n}\n\n// 이 함수는 계산인가??\nfunction someCal(obj) {\n\tsomeUtil(obj);\n\t// obj는 불변인가??\n\treturn obj\n}\n")),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"someCal")," 함수는 ",t.createElement(n.code,null,"someUtil")," 이라는 ",t.createElement(n.code,null,"액션")," 때문에 또 다른 액션이 되어 버립니다.\n액션은 전염되기 때문이죠."),"\n",t.createElement(n.p,null,t.createElement(n.strong,null,"전염"),"이라는 키워드에 주목해 봅시다!, ",t.createElement(n.code,null,"someUtil")," 함수는 당장 고칠 수는 없는 함수이고, ",t.createElement(n.code,null,"액션"),"입니다.\n",t.createElement(n.code,null,"액션"),"인 ",t.createElement(n.code,null,"someUtil")," 함수는 외부에 영향을 줄 수 있기 때문에 실행 시점에 따라 반환 값이 달라질 수 있습니다.\n때문에 ",t.createElement(n.code,null,"someUtil"),"를 호출할 때 쓰인 인자 ",t.createElement(n.code,null,"obj"),"도 불변 데이터일지 알 수 없는 상황입니다."),"\n",t.createElement(n.p,null,"이렇게 ",t.createElement(n.code,null,"someCal"),"는 액션이 됩니다.\n이런 현상을 두고 저희는 '액션은 전염된다'라고 표현합니다."),"\n",t.createElement(n.p,null,"당장 수정이 어려운 함수에 대한 전염을 막기 위한 대책으로 ",t.createElement(n.code,null,"방어적 복사"),"를 사용합니다."),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-js"},"// 당장 고칠 수 없는 유틸 함수 (액선)\nimport someUtil from '/utils'\n\nconst obj = {\n\t// 대충 데이터\n}\n\n// 원본 데이터(obj)가 변경 되었는가?\n// 이 함수는 계산인가?\nconst someCal(obj) \n\t// deepCopy() 는 깊은 복사를 위한 함수\n\tconst copyObj = deepCopy(obj);\n\tsomeUtil(copyObj)\n\treturn copyObj\n}\n")),"\n",t.createElement(n.p,null,"이 경우 ",t.createElement(n.code,null,"someCal"),"은 계산입니다.\n외부에 영향을 주지 않고(obj는 변경되지 않는다.), 어떤 시점에 실행하든 같은 입력(obj)에 같은 결과(copyObj)를 반환하기 때문이죠."),"\n",t.createElement(n.h3,null,"정리"),"\n",t.createElement(n.p,null,"지금까지 내용을 정리하면 아래와 같습니다."),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"함수형 프로그래밍에서는 ",t.createElement(n.code,null,"카피 앤 라이트"),"와 ",t.createElement(n.code,null,"방어적 복사"),"를 이용해 ",t.createElement(n.code,null,"데이터 불변성"),"을 유지하려 노력하고, 이는 함수를 예측 가능하고 부수효과가 적은 ",t.createElement(n.code,null,"계산"),"으로 만들어 줍니다."),"\n"),"\n",t.createElement(n.h3,null,"깊은 복사 사용"),"\n",t.createElement(n.p,null,"추가로 실제로 적용해 보고 싶은 분들을 위해 작은 팁을 넣어뒀습니다."),"\n",t.createElement(n.p,null,"깊은 복사를 사용하는 방법은 몇 가지가 있습니다."),"\n",t.createElement(n.ol,null,"\n",t.createElement(n.li,null,"Lodash 라이브러리의 ",t.createElement(n.code,null,".cloneDeep()")," 함수를 사용합니다."),"\n",t.createElement(n.li,null,"최근 추가된 ",t.createElement(n.code,null,"structuredClone()")," API를 사용합니다.","\n",t.createElement(n.ol,null,"\n",t.createElement(n.li,null,"IE에서는 지원하지 않는 API이므로, 필요할 경우에는 폴리필을 사용할 수 있습니다."),"\n"),"\n"),"\n",t.createElement(n.li,null,t.createElement(n.code,null,"JSON.parse(JSON.stringify(obj))")),"\n"),"\n",t.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 127.49999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAIAAAA44esqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEiUlEQVR42lWVeyzXXxjHDyK1irm0lKximM2wmVuZLKaoGZa5M4yRsSVtfiT8aMu0mDbaotwnc79GIf5oy72trLS5pFyifmJ0w+/F2azOH58d53ue53k/7/f7PMTExMTy8vLY2NilS5f09fVNTEyMjY2NjIzYHDt2zN/ff2Fh4fPnzwt/r8XFxcnJSbG6uvrly5d79+45ODjs2bNHQUFBCKGoqMj3+PHj4+PjW1tbGxsbW3+szc1NvisrK+L79++BgYG3b98eGho6d+7c3r17SaGkpMTm2bNnXPr16xfBv3//5ib79fV1Nj9//lxbWxPd3d2qqqoeHh7z8/O3bt2iprKyMmXpgkhidut0dnYODg4+3ll9fX0/fvwQMTExXD169Ci/jYyMmJub79u3j5OoqCiJkEvw8vLlS4BMTU21trY2NDS8efOGvMLS0pKr6urqYH737l1GRgaAObly5YrsEG5qa2vv3r3b0tLy/v37kpKSioqKV69ekVfAMFfpk4LQCwT2nAQFBUnY8kvb1dXVRUVFxcXFDx8+fPv2LefC1NSUq/RJt/AUGhp68+ZNX19fNzc3akqqZdv9/f3Dw8PwOjo6OjMzA3kiODiYYKAikpmZ2aNHjwBPKfrv7e2VIm3urK2/1/raugCMk5MT8To6OvHx8U1NTXADSVIk/IAw8raEwJIZORfh4eGurq4AtrKyCggIuHDhAmTyG0pyj3js9e3bNxlGUs759evXr/AnUlJSEhMTtbS0cFhbWxv7y5cvyxu73bJQKzc3l1bZl5aWnjlzJjMzU9y5c6egoAAnUjMzI5MuLCws7O3t6VmGkej+/fuGhoaxsbEfP37ES9nZ2QcOHEBUUVVVdfXqVUx2/vx5eMY6jY2NaWlpp06dYkOp5ORkOzs7tC0vL0ekrq4u6jk6OmJN8eHDBxj28fEBbU1NzZMnT4jPy8uLi4vL+DeDsnV1dYRNT08v/7dM2aWlpbNnzz5//nxbKoAhCT6LjIxsbm6em5v79OkTHiZ9enq61AnloEqSjBbe3t7Xrl0j3XbwwMCAiopKUlISjp+dnQXL06dPYT4nJ0cKJmkjeG1nhYWFIe3r16+3g7Oysvjj+vXrbTsLIPX19Vg9Pz//z8e8axWk5T6MCB4KJnF3d/fy8uro6OCop6cHYpAdSSTbf84AmqJH7JSamrr99JAhJCQEk8MNNdvb2znU1dWNjo5GdnqR9eUj4WH6+fk5OztbmFtszxo5d2Af3SsrK3mxiAecixcvogITbpc2NhhLU1OTEG1tbaGhoYE3Dx48CHI0uHHjBoIxlZL+SSovK3/x4gWPCQkkcwiZkJCwf/9+ggkUJ0+ehGo1NTWMxdy0trbGT4WFhUwYT09PXrW0OouXbGBgYGtryxMEKS4SNjY2enp6pGEYUB/fwTP3cE56WjogJWGkYEgwcFxcXAAMIxAsGH3kYJ5QnOdx+PBhIGHVBw8eMH1kJE48dOgQaKlMsdOnT4OorKxMyOFOZb4kpgs2cjDgJOZpREQEkSdOnEAU0B05coR/CfSYnZ39P/ACg+quntSnAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="짤"\n        title=""\n        src="/static/2b07ba7dba4d7c085566e4ffdf6e4a19/7d769/Pastedimage20240516154841.png"\n        srcset="/static/2b07ba7dba4d7c085566e4ffdf6e4a19/5243c/Pastedimage20240516154841.png 240w,\n/static/2b07ba7dba4d7c085566e4ffdf6e4a19/ab158/Pastedimage20240516154841.png 480w,\n/static/2b07ba7dba4d7c085566e4ffdf6e4a19/7d769/Pastedimage20240516154841.png 960w,\n/static/2b07ba7dba4d7c085566e4ffdf6e4a19/298a5/Pastedimage20240516154841.png 972w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",t.createElement(n.p,null,"자세한 방법은 구글에 검색하면 많이 나오니 참고하시면 되겠습니다!!\n",t.createElement(n.del,null,"귀찮은 게 아닙니다")),"\n",t.createElement(n.h2,null,"더 다양한 기술"),"\n",t.createElement(n.p,null,"계속해서 언급했듯, 이 글은 ",t.createElement(n.a,{href:"https://product.kyobobook.co.kr/detail/S000001952246"},"'쏙쏙 들어오는 함수형 코딩'")," 을 읽고 공유하고 싶은 마음에 쓴 글입니다. 위 책에서 이야기하는 내용의 1/10도 담고 있지 않습니다. 제 글을 읽고 함수형 코딩에 흥미가 생기게 된다면 꼭 한번 책으로 읽어보길 강력히 추천합니다!!"),"\n",t.createElement(n.p,null,"(지금 1편과 2편 사이에도 액션에서 계산을 빼내는 여러 가지 기술이나, 액션을 더 낫게 하는 방법 등 유용한 정보들이 빠졌습니다.)\n(빠진 내용들을 간단하게 공부해 보고 싶다면 ",t.createElement(n.a,{href:"https://velog.io/@teo/functional-programming-study"},"테오 님의 게시글"),"을 추천합니다.)"))}var r=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.RP)(),e.components);return n?t.createElement(n,e,t.createElement(c,e)):c(e)},m=l(2141);function s(e){return t.createElement(m.A,e,t.createElement(r,e))}m.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-함수형-2-편-index-mdx-cdc15b9c7f391b1da40b.js.map