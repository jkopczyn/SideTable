json.array! @games, partial: 'api/games/game', as: :game, tree: true,
                    locals: {page: @page, total_pages: @total_pages}
