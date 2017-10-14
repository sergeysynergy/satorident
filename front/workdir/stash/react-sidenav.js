
              if (el.children.length > 0) {
                el.children.map((child, childKey) =>
                  <Nav id={child.id} key={childKey}>
                    <NavIcon>
                      <SvgIcon size={20} icon={child.icon}/>
                    </NavIcon>
                    <NavText> {child.label} </NavText>
                  </Nav>
                )
              }


          {menuLinks.map((el, key) => {
            let children = []
            if (typeof(el.children) !== 'undefined') {
              console.log('child', el.children);
              children = el.children.map((child, childKey) =>
                <Nav id={child.id} key={childKey}>
                  <NavIcon>
                    <SvgIcon size={20} icon={child.icon}/>
                  </NavIcon>
                  <NavText> {child.label} </NavText>
                </Nav>
              )
            }
            return (
              <Nav id={el.id} key={key}>
                <NavIcon>
                  <SvgIcon size={20} icon={el.icon}/>
                </NavIcon>
                <NavText> {el.label} </NavText>
                {children}
              </Nav>
            )}
          )}
        </SideNav>



let menuLinks = [
  {id: 'home', icon: home, label: 'Главная'},
  {id: 'ceni', icon: database, label: 'Цены'},
  {id: 'uslugi', icon: aidKit, label: 'Услуги', expanded: true, children: [
    {id: 'specialisty', icon: single, label: 'Сотрудники'},
    {id: 'portfolio', icon: single, label: 'Наши работы'},
    {id: 'otzyvy', icon: single, label: 'Отзывы'},
    {id: 'adresa-stomatologicheskih-klinik-satori-dent',
      icon: single, label: 'Контакты'},
    {id: 'orderCall', icon: single, label: 'Заказать звонок'},
  ]},
  {id: 'specialisty', icon: users, label: 'Сотрудники'},
  {id: 'portfolio', icon: happy, label: 'Наши работы'},
  {id: 'otzyvy', icon: tab, label: 'Отзывы'},
  {id: 'adresa-stomatologicheskih-klinik-satori-dent',
    icon: location2, label: 'Контакты'},
  {id: 'orderCall', icon: phone, label: 'Заказать звонок'},
]
