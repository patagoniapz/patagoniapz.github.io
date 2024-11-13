# -*- coding: utf-8 -*- #

import datetime

AUTHOR = 'Patagonia'
SITENAME = 'Patagonia PZ'
SITEURL = 'https://patagoniapz.github.io/'

PATH = 'content'

TIMEZONE = 'America/Argentina/Buenos_Aires'

DEFAULT_LANG = 'Spanish'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'https://getpelican.com/'),
         ('Python.org', 'https://www.python.org/'),
         ('Jinja2', 'https://palletsprojects.com/p/jinja/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

THEME = 'default'

DATE = datetime.datetime.now().year

patagoniaItems = [
    {
        'itemImage': '/theme/img/tiles/windows.png',
        'itemName': 'Ventana',
        'itemMaterials': [
            {'materialName': 'Plank', 'materialmg': '/theme/img/pz-items/Plank.png', 'materialCount': 4},
            {'materialName': 'Screws', 'materialmg': '/theme/img/pz-items/Screws.png', 'materialCount': 4},
            {'materialName': 'BrokenBottle', 'materialmg': '/theme/img/pz-items/BrokenBottle.png', 'materialCount': 4}
        ],
        'itemTools': [
            {'toolImg': '/theme/img/gif/hammer.gif', 'toolCount': 1},
            {'toolImg': '/theme/img/pz-items/Screwdriver.png', 'toolCount': 1},
            {'toolImg': '/theme/img/pz-items/Hacksaw.png', 'toolCount': 1}
        ],
        'itemProfessions': [
            {'professionName': 'Carpinteria', 'professionLevel': 1}
        ]
    }
]
