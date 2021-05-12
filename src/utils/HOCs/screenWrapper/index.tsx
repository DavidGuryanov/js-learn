import React from 'react'
import clsx from 'clsx'
import { useHistory } from 'react-router-dom'
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@material-ui/core'
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  Inbox,
  Mail,
  ExpandLess,
  ExpandMore,
  StarBorder,
  MenuBookSharp,
  CheckBoxOutlineBlankRounded,
  CodeRounded,
} from '@material-ui/icons'

import { StyledAppBar, NavBar, CompanyData, Logo, BrandName } from './styles'
import { mockCoursePlan } from './mockData'
import { tasksArray } from '../../../components/Courses/Course/data'
import { SubmitButton } from '../../../ui/commonUI'

const drawerWidth = 300
const courseNames = Object.entries(tasksArray).map((el) => el[1].fullName)

const WithTopBar = (Component: React.ComponentType, type?: string, ...props: any) => {
  // console.log(props)
  const NewComp = () => {
    const history = useHistory()
    const useStyles = makeStyles((theme: Theme) =>
      createStyles({
        root: {
          display: 'flex',
        },
        appBar: {
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          zIndex: theme.zIndex.drawer + 1,
          backgroundColor: '#232323',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          // /* padding: 20px, */
          boxSizing: 'border-box',
          width: '100%',
          // position: relative,
        },
        appBarShift: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
        toolBar: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          // /* padding: 20px, */
          boxSizing: 'border-box',
          width: '100%',
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        hide: {
          display: 'none',
        },
        drawer: {
          width: drawerWidth,
          // backgroundColor: '#232323',
          flexShrink: 0,
        },
        drawerPaper: {
          width: drawerWidth,
          backgroundColor: '#232323',
          color: 'white',
        },
        drawerHeader: {
          display: 'flex',
          alignItems: 'center',
          padding: theme.spacing(0, 1),
          // necessary for content to be below app bar
          ...theme.mixins.toolbar,
          justifyContent: 'flex-end',
        },
        content: {
          flexGrow: 1,
          padding: theme.spacing(3),
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: -drawerWidth,
        },
        contentShift: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
        divider: {
          backgroundColor: '#ffffff85',
        },
        nested: {
          paddingLeft: theme.spacing(1),
        },
        icon: {
          color: 'white',
        },
        listIcon: {
          color: 'white',
          minWidth: '33px',
        },
        listButton: {
          fontWeight: 800,
          fontFamily: 'GolosTextWebRegular',
        },
        listText: {
          fontWeight: 800,
          fontFamily: 'GolosTextWebRegular',
        },
        active: {
          backgroundColor: '#5854FD',
          fontWeight: 800,
          '&:hover': {
            backgroundColor: '#5854FD',
          },
        },
      })
    )
    const classes = useStyles()
    const theme = useTheme()
    const [open, setOpen] = React.useState(false)
    const [openSub, setOpenSub] = React.useState([false, false, false, false])

    const handleDrawerOpen = () => {
      setOpen(true)
    }

    const handleDrawerClose = () => {
      setOpen(false)
    }

    const handleClick = (ind: number) => {
      const newArr = [...openSub]
      newArr[ind] = !newArr[ind]
      setOpenSub(newArr)
    }

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar className={classes.toolBar}>
            <CompanyData>
              <>
                {type === 'full' ? (
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                  >
                    <Menu />
                  </IconButton>
                ) : null}
                <Logo />
              </>
              <Typography variant="h6" noWrap></Typography>
              <BrandName>Top JS lessons</BrandName>
            </CompanyData>
            <SubmitButton btnwidth={123}>Регистрация</SubmitButton>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose} className={classes.icon}>
              {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>
          </div>
          <Divider className={classes.divider} />
          <List>
            {courseNames.map((text, index) => (
              <React.Fragment key={text}>
                <ListItem
                  button
                  onClick={() => handleClick(index)}
                  className={clsx(classes.listButton, openSub[index] && classes.active)}
                >
                  <ListItemText primary={text} className={classes.listText} />
                  {openSub[index] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openSub[index]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {tasksArray
                      .find((el) => el.fullName === text)
                      ?.tasks.map((task) => {
                        const getIcon = (type: string) => {
                          switch (type) {
                            case 'task':
                              return <CodeRounded />
                            case 'lection':
                              return <MenuBookSharp />
                            case 'test':
                              return <CheckBoxOutlineBlankRounded />
                          }
                        }
                        return (
                          <ListItem button className={classes.nested} key={task.id}>
                            <ListItemIcon className={classes.listIcon}>
                              {getIcon(task.type)}
                            </ListItemIcon>
                            <ListItemText
                              primary={`${task.title.replaceAll(/[\d.]/gm, '')}- ${task.fullTitle}`}
                              onClick={() => history.push(`/courses/jscore/${task.id}`)}
                            />
                          </ListItem>
                        )
                      })}
                  </List>
                </Collapse>
              </React.Fragment>
            ))}
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Component />
        </main>
      </div>
    )
  }
  return NewComp
}

export default WithTopBar
